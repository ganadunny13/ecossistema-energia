const express = require('express');
const app = express(); // ou receba como parâmetro
const ajudaRoutes = require('../routes/ajuda');

app.use('/api/ajuda', ajudaRoutes);
