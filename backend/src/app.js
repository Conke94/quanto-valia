import express from 'express';
import cors from 'cors';

import { connectDatabase } from './database/utils/connect-database.js';
import routes from './api/routes/index.js';

const app = express();

app.use(express.json());

app.use(cors());
app.use(cors({origin: 'http://localhost:3000'}));
app.use('/standard', routes);

app.listen(5000 ,async () => {
  console.log(`Servidor rodando na porta 5000`);
  await connectDatabase()
});

