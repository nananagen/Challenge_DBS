const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Rotas para manipulação de dados
app.post('/api/data', (req, res) => {
  // Implementar a lógica para adicionar dados ao banco de dados aqui.
  // Receber os dados do front-end em req.body e inserir no banco de dados.
  // Certificar de transformar os dados do front-end em linhas de banco de dados, como necessário.
  // Retornar uma resposta adequada, como um status HTTP 201 (Created) ou um objeto JSON.

  res.status(201).json({ message: 'Dados adicionados com sucesso.' });
});

app.put('/api/data/:id', (req, res) => {
  // Implementar a lógica para editar dados no banco de dados aqui.
  // Receber os dados atualizados do front-end em req.body e atualizar a linha correspondente no banco de dados.
  // Certificar de manipular a edição apropriadamente.
  // Retorne uma resposta adequada, como um status HTTP 200 (OK) ou uma mensagem de sucesso.

  res.status(200).json({ message: 'Dados atualizados com sucesso.' });
});

app.delete('/api/data/:id', (req, res) => {
  // Implementar a lógica para excluir dados do banco de dados aqui.
  // Usar o ID fornecido na URL (req.params.id) para identificar a linha a ser excluída no banco de dados.
  // Retornar uma resposta adequada, como um status HTTP 204 (No Content) ou uma mensagem de sucesso.

  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Servidor Express está ouvindo na porta ${port}`);
});
