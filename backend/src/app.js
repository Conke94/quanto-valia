import express from 'express'
import path from 'path';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend rodando na porta 5000');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
