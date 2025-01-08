import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();

app.use(express.json());

app.use(cors());
app.use(cors({origin: 'http://localhost:3000'}));

app.get('/', (req, res) => {
  res.send('Backend rodando na porta 5000');
});

app.get('/president', (req, res) => {
  res.send([
        {
            name: 'Luis Inácio Lula',
            startYear: 2007,
            endYear: 2010,
            urlLogo: ''
        },
        {
            name: 'Dilma Roussef',
            startYear: 2011,
            endYear: 2014,
            urlLogo: ''
        },
        {
            name: 'Dilma Roussef',
            startYear: 2015,
            endYear: 2016,
            urlLogo: ''
        },
        {
            name: 'Michel Temer',
            startYear: 2016,
            endYear: 2019,
            urlLogo: ''
        },
        {
            name: 'Jair Messias Bolsonaro',
            startYear: 2019,
            endYear: 2023,
            urlLogo: ''
        },
        {
            name: 'Luis Inácio Lula',
            startYear: 2023,
            endYear: 2026,
            urlLogo: ''
        }
    ]);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
