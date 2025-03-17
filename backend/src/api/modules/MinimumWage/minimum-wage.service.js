import axios from 'axios'

import logger from '../../utils/logger.js'

export class MinimumWageService{
    constructor(repository){
        this.repository = repository;
    }

    async externalIndex(){
        logger.info("[MinimumWageService] externalIndex init");
        const { data } = await axios.get(" https://api.bcb.gov.br/dados/serie/bcdata.sgs.1619/dados?formato=json");
        const result = data.map((wage) => ({
            value: wage.valor,
            month: wage.data.split('/')[1],
            year: wage.data.split('/')[2]
        }));
        logger.info("[MinimumWageService] externalIndex finish");
        return result;
    }
}