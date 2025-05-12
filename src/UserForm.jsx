import React, { useState, useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import InputMask from 'react-input-mask';

export default function UserForm() {
  const [tipoPessoa, setTipoPessoa] = useState('fisica');
  const [formData, setFormData] = useState({
    nome: '', cpf: '', rg: '', orgaoEmissor: '', dataNascimento: '', genero: '', estadoCivil: '',
    endereco: '', quadra: '', lote: '', cep: '', referencia: '', telefone: '', email: '', emailExtra: '',
    renda: '', unidadeConsumidora: '', razaoSocial: '', cnpj: '', documentos: [],
    outroTitular: false, nomeTitular: '', cpfTitular: '', assinaturaTitular: ''
  });

  const sigCanvasRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData(prev => ({ ...prev, documentos: files }));
  };

  const salvarAssinatura = () => {
    if (sigCanvasRef.current && !sigCanvasRef.current.isEmpty()) {
      const assinaturaURL = sigCanvasRef.current.getTrimmedCanvas().toDataURL('image/png');
      setFormData(prev => ({ ...prev, assinaturaTitular: assinaturaURL }));
    } else {
      alert('Por favor, desenhe a assinatura antes de salvar.');
    }
  };

  const limparAssinatura = () => {
    if (sigCanvasRef.current) {
      sigCanvasRef.current.clear();
      setFormData(prev => ({ ...prev, assinaturaTitular: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nome || !formData.cpf || !formData.telefone || !formData.email) {
      alert('Preencha todos os campos obrigatórios.');
      return;
    }

    const dataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === 'documentos') {
        formData.documentos.forEach((file, idx) => dataToSend.append(`documento_${idx}`, file));
      } else {
        dataToSend.append(key, formData[key]);
      }
    });

    try {
      const response = await fetch('http://localhost:5000/usuarios', {
        method: 'POST',
        body: dataToSend
      });

      const result = await response.json();
      alert(result.mensagem || 'Cadastro realizado com sucesso!');
      console.log('Dados enviados:', formData);
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      alert('Erro ao enviar os dados. Tente novamente.');
    }
  };

  const contratoTexto = formData.outroTitular ? `
    Eu, ${formData.nomeTitular || '________________'}, CPF ${formData.cpfTitular || '___________'},
    autorizo ${formData.nome || '________________'} a utilizar meu endereço (${formData.endereco || '________________'})
    para fins de adesão ao serviço de energia limpa oferecido pela empresa.
    Declaro estar ciente e de acordo com os termos estabelecidos neste contrato.
  ` : '';

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Cadastro de Usuário</h2>

      <div className="mb-4">
        <label className="mr-4">
          <input type="radio" name="tipoPessoa" value="fisica" checked={tipoPessoa === 'fisica'} onChange={() => setTipoPessoa('fisica')} /> Pessoa Física
        </label>
        <label>
          <input type="radio" name="tipoPessoa" value="juridica" checked={tipoPessoa === 'juridica'} onChange={() => setTipoPessoa('juridica')} /> Pessoa Jurídica
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="nome" value={formData.nome} onChange={handleChange} placeholder="Nome completo" className="p-2 border rounded" required />

        <InputMask
          mask="999.999.999-99"
          value={formData.cpf}
          onChange={handleChange}
        >
          {(inputProps) => <input {...inputProps} name="cpf" placeholder="CPF" className="p-2 border rounded" required />}
        </InputMask>

        <input name="rg" value={formData.rg} onChange={handleChange} placeholder="RG" className="p-2 border rounded" />
        <input name="orgaoEmissor" value={formData.orgaoEmissor} onChange={handleChange} placeholder="Órgão emissor" className="p-2 border rounded" />
        <input name="dataNascimento" type="date" value={formData.dataNascimento} onChange={handleChange} className="p-2 border rounded" />
        <input name="genero" value={formData.genero} onChange={handleChange} placeholder="Gênero" className="p-2 border rounded" />
        <input name="estadoCivil" value={formData.estadoCivil} onChange={handleChange} placeholder="Estado civil" className="p-2 border rounded" />

        <InputMask
          mask="(99) 99999-9999"
          value={formData.telefone}
          onChange={handleChange}
        >
          {(inputProps) => <input {...inputProps} name="telefone" placeholder="Telefone" className="p-2 border rounded" required />}
        </InputMask>

        <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" className="p-2 border rounded" required />
        <input name="emailExtra" type="email" value={formData.emailExtra} onChange={handleChange} placeholder="Email extra" className="p-2 border rounded" />
        <input name="endereco" value={formData.endereco} onChange={handleChange} placeholder="Endereço" className="p-2 border rounded" required />
        <input name="quadra" value={formData.quadra} onChange={handleChange} placeholder="Quadra" className="p-2 border rounded" />
        <input name="lote" value={formData.lote} onChange={handleChange} placeholder="Lote" className="p-2 border rounded" />

        <InputMask
          mask="99999-999"
          value={formData.cep}
          onChange={handleChange}
        >
          {(inputProps) => <input {...inputProps} name="cep" placeholder="CEP" className="p-2 border rounded" />}
        </InputMask>

        <input name="referencia" value={formData.referencia} onChange={handleChange} placeholder="Ponto de referência" className="p-2 border rounded" />
        <input name="renda" value={formData.renda} onChange={handleChange} placeholder="Renda" className="p-2 border rounded" />
        <input name="unidadeConsumidora" value={formData.unidadeConsumidora} onChange={handleChange} placeholder="Unidade consumidora" className="p-2 border rounded" />

        {tipoPessoa === 'juridica' && (
          <>
            <input name="razaoSocial" value={formData.razaoSocial} onChange={handleChange} placeholder="Razão social" className="p-2 border rounded" required />
            <InputMask
              mask="99.999.999/9999-99"
              value={formData.cnpj}
              onChange={handleChange}
            >
              {(inputProps) => <input {...inputProps} name="cnpj" placeholder="CNPJ" className="p-2 border rounded" required />}
            </InputMask>
          </>
        )}
      </div>

      <div className="my-4">
        <label className="block mb-2 font-semibold">Anexar documentos (PDF, JPG, PNG):</label>
        <input type="file" accept=".pdf,.png,.jpg,.jpeg" multiple onChange={handleFileChange} className="p-2 border rounded w-full" />
        {formData.documentos.length > 0 && (
          <ul className="mt-2 list-disc list-inside text-sm text-gray-700">
            {formData.documentos.map((file, idx) => <li key={idx}>{file.name}</li>)}
          </ul>
        )}
      </div>

      <div className="my-4">
        <label>
          <input type="checkbox" name="outroTitular" checked={formData.outroTitular} onChange={handleChange} className="mr-2" />
          A conta não está no meu nome
        </label>
      </div>

      {formData.outroTitular && (
        <div className="border p-4 rounded bg-gray-50 mb-6">
          <h3 className="text-lg font-semibold mb-2">Dados do titular do imóvel</h3>
          <input name="nomeTitular" value={formData.nomeTitular} onChange={handleChange} placeholder="Nome do titular" className="p-2 border rounded w-full mb-2" />
          <InputMask
            mask="999.999.999-99"
            value={formData.cpfTitular}
            onChange={handleChange}
          >
            {(inputProps) => <input {...inputProps} name="cpfTitular" placeholder="CPF do titular" className="p-2 border rounded w-full mb-2" />}
          </InputMask>
          <div className="bg-white p-3 rounded border text-sm text-gray-700 whitespace-pre-line mb-4">
            {contratoTexto.trim()}
          </div>
          <div className="mb-4">
            <p className="font-semibold mb-1">Assinatura do titular:</p>
            <SignatureCanvas ref={sigCanvasRef} penColor="black" canvasProps={{ width: 500, height: 150, className: 'border rounded' }} />
            <div className="mt-2 flex gap-2">
              <button type="button" onClick={salvarAssinatura} className="bg-blue-500 text-white px-4 py-1 rounded">Salvar</button>
              <button type="button" onClick={limparAssinatura} className="bg-gray-500 text-white px-4 py-1 rounded">Limpar</button>
            </div>
          </div>
        </div>
      )}

      <button type="submit" className="mt-6 w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">
        Cadastrar
      </button>
    </form>
  );
}
