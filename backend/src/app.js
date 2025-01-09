import routes from './api/routes/index.js';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());
app.use(cors({origin: 'http://localhost:3000'}));

app.use('/standard', routes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
