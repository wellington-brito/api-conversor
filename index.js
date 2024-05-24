//configurando servidor express
const express = require('express');
const app = express();
const port = 3000;
const converterNumeroParaTexto = require('./conversor');

app.use(express.json());

// Rota GET para a mensagem de boas-vindas
app.get('/', (req, res) => {
  res.send('Bem-vindo à API para conversão de número em texto! Exemplo: GET -> converter/125');
});


// Rota GET para solicitar o nome do número em texto;
app.get('/converter/:numero', (req, res) => {
    const numero = req.params.numero;
    const mensagem = converterNumeroParaTexto(numero);
    res.send(mensagem);
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});