import express from 'express';
import cors from 'cors';

import { connectDatabase } from './database/utils/connect-database.js';
import routes from './api/routes.js';

class App {
    constructor(){ this.app = express(); }

    createInstance(){
        this.app.use(express.json());

        this.app.use(cors());
        this.app.use(cors({origin: 'http://localhost:3000'}));
        this.app.use('/standard', routes);

        this.app.listen(5000 ,async () => {
            console.log(`Servidor rodando na porta 5000`);
            await connectDatabase()
        });
    }
}

const server = new App();
server.createInstance();