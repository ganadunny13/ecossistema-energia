const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const axios = require('axios');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

const storage = multer.memoryStorage();
const upload = multer({ storage });

// Conexão com MongoDB via Mongoose
mongoose.connect('mongodb://127.0.0.1:27017/ecossistemaEnergia', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Conectado ao MongoDB com Mongoose'))
.catch(err => console.error('❌ Erro ao conectar no MongoDB:', err));

// Schemas e Models
const UsuarioSchema = new mongoose.Schema({
  nome: String,
  email: String,
  arquivos: Array,
  dataCadastro: Date
});
const Usuario = mongoose.model('Usuario', UsuarioSchema);

const ValidacaoSchema = new mongoose.Schema({
  fatura: String,
  checklist: Object,
  observacoes: String,
  status: String,
  data: { type: Date, default: Date.now }
});
const Validacao = mongoose.model('Validacao', ValidacaoSchema);

const AjudaSchema = new mongoose.Schema({
  nome: String,
  email: String,
  mensagem: String,
  data: { type: Date, default: Date.now }
});
const Ajuda = mongoose.model('Ajuda', AjudaSchema);

const UsinaSchema = new mongoose.Schema({
  nome: String,
  localizacao: String,
  status: String,
  responsavel: String,
  criadaEm: Date
});
const Usina = mongoose.model('Usina', UsinaSchema);
const usuariosRouter = require('./routes/usuarios');

// Rota base
app.get('/', (req, res) => {
  res.send("API do Ecossistema rodando!");
});
app.use('/api', usuariosRouter);
// Cadastro de usuários
app.post('/usuarios', upload.any(), async (req, res) => {
  try {
    const dados = req.body;
    const arquivos = req.files.map(file => ({
      filename: file.originalname,
      mimetype: file.mimetype,
      size: file.size
    }));

    const usuarioCompleto = {
      ...dados,
      arquivos,
      dataCadastro: new Date()
    };

    await Usuario.create(usuarioCompleto);
    res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso!' });
  } catch (error) {
    console.error('❌ Erro ao salvar usuário:', error);
    res.status(500).json({ mensagem: 'Erro no servidor.' });
  }
});

// Registro de energia em memória
let registrosEnergia = [];
let distribuicoes = [];
let unidadesConsumidoras = [];

app.post('/api/energia', (req, res) => {
  const { gerado, consumido, excedente } = req.body;
  const novoRegistro = {
    produtor: `Produtor-${Date.now()}`,
    gerado,
    consumido,
    excedente
  };
  registrosEnergia.push(novoRegistro);
  res.json({ mensagem: 'Crédito registrado com sucesso!' });
});

app.get('/api/energia', (req, res) => {
  res.json(registrosEnergia);
});

// Distribuição de créditos
app.post('/api/distribuir', (req, res) => {
  const { produtor, consumidor, quantidade } = req.body;
  if (!produtor || !consumidor || !quantidade) {
    return res.status(400).json({ mensagem: 'Campos obrigatórios não informados.' });
  }
  const novaDistribuicao = {
    id: Date.now(),
    produtor,
    consumidor,
    quantidade
  };
  distribuicoes.push(novaDistribuicao);
  res.json({ mensagem: 'Distribuição registrada com sucesso!' });
});

app.get('/api/distribuir', (req, res) => {
  res.json(distribuicoes);
});

// Distribuição automática
app.post('/api/distribuir-automatico', (req, res) => {
  const totalExcedente = registrosEnergia.reduce((acc, e) => acc + Number(e.excedente), 0);
  const totalDistribuido = distribuicoes.reduce((acc, d) => acc + Number(d.quantidade), 0);
  const restante = totalExcedente - totalDistribuido;
  const Usuario = require('./models/Usuario');
  const Validacao = require('./models/Validacao');
  const Ajuda = require('./models/Ajuda');
  const Usina = require('./models/Usina');
  const cadastroUsuarioRouter = require('./routes/cadastroUsuario');
  app.use('/api', cadastroUsuarioRouter);
  const ajudaRouter = require('./routes/ajuda');
app.use('/api/ajuda', ajudaRouter);
const ajudaRoutes = require('./routes/ajuda'); // ajuste o caminho se necessário


  if (restante <= 0) {
    return res.json({ mensagem: 'Nenhum crédito disponível para distribuir.' });
  }

  const consumidoresAtivos = unidadesConsumidoras.filter(u => u.status === "ativa");
  const totalGasto = consumidoresAtivos.reduce((acc, u) => acc + Number(u.gastoMensal || 0), 0);

  const distribuicoesNovas = consumidoresAtivos.map(u => {
    const porcentagem = Number(u.gastoMensal || 0) / totalGasto;
    return {
      id: Date.now() + Math.random(),
      produtor: "Distribuição Automática",
      consumidor: u.nome,
      quantidade: (porcentagem * restante).toFixed(2)
    };
  });

  distribuicoes.push(...distribuicoesNovas);
  res.json({ mensagem: 'Distribuição automática concluída', totalDistribuido: restante });
});

// Ajuda com notificação Slack
app.post('/api/ajuda', async (req, res) => {
  const { nome, email, mensagem } = req.body;
  if (!nome || !email || !mensagem) {
    return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios.' });
  }

  try {
    await Ajuda.create({ nome, email, mensagem });

    const webhookSlack = 'https://hooks.slack.com/services/SEU/WEBHOOK/URL'; // Substitua aqui
    await axios.post(webhookSlack, {
      text: `💬 *Nova mensagem de ajuda:*\n👤 *${nome}*\n📧 ${email}\n📝 ${mensagem}`
    });

    res.status(201).json({ mensagem: 'Mensagem registrada e enviada ao suporte!' });
  } catch (error) {
    console.error('Erro na rota /ajuda:', error);
    res.status(500).json({ mensagem: 'Erro ao processar a solicitação.' });
  }
});

// Validação de faturas
app.post('/api/validacoes', async (req, res) => {
  try {
    await Validacao.create(req.body);
    res.status(201).json({ mensagem: 'Validação salva com sucesso!' });
  } catch (error) {
    console.error('Erro ao salvar validação:', error);
    res.status(500).json({ mensagem: 'Erro interno do servidor.' });
  }
});

app.get('/api/validacoes', async (req, res) => {
  try {
    const validacoes = await Validacao.find();
    res.json(validacoes);
  } catch (error) {
    console.error('Erro ao buscar validações:', error);
    res.status(500).json({ mensagem: 'Erro ao buscar registros.' });
  }
});

// Cadastro e listagem de usinas
app.post('/api/usinas', async (req, res) => {
  const { nome, localizacao, status, responsavel } = req.body;
  if (!nome || !localizacao || !status || !responsavel) {
    return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios.' });
  }

  try {
    await Usina.create({ nome, localizacao, status, responsavel, criadaEm: new Date() });
    res.status(201).json({ mensagem: 'Usina cadastrada com sucesso!' });
  } catch (err) {
    console.error('Erro ao salvar usina:', err);
    res.status(500).json({ mensagem: 'Erro ao cadastrar usina.' });
  }
});

app.get('/api/usinas', async (req, res) => {
  try {
    const listaUsinas = await Usina.find();
    res.json(listaUsinas);
  } catch (err) {
    console.error('Erro ao buscar usinas:', err);
    res.status(500).json({ mensagem: 'Erro ao listar usinas.' });
  }
});

// Inicialização
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
app.use('/usuarios', require('./routes/usuarios'));
app.use('/api/ajuda', require('./routes/ajuda'));
app.use('/api/validacoes', require('./routes/validacoes'));
app.use('/api/usinas', require('./routes/usinas'));
