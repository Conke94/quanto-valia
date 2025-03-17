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

    async accumulatedIndex(params){
        logger.info("[InflationService] accumulatedIndex init");
        const { start_date, end_date } = params;
        const payload = { start_date, end_date };
        const data = await this.repository.accumulatedIndex(payload);

        const percentual = (data.final_value - data.initial_value)*100/data.initial_value;
        const result = { ...data, percentual }

        logger.info("[InflationService] accumulatedIndex finish");
        return result;
    }

    async upsert() {
        logger.info("[MinimumWageService] upsert init");
        try {
            const data = await this.externalIndex();
            const results = [];

            for (const item of data) {
                const savedData = await this.repository.upsertMinimumWage(item);
                results.push(savedData);
            }

            logger.info("[MinimumWageService] upsert success");
            return results;
        } catch (error) {
            logger.error("[MinimumWageService] upsert error", error);
        }
    }
}