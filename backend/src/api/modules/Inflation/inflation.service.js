import axios from 'axios'

import logger from '../../utils/logger.js'

export class InflationService{
    constructor(repository){
        this.current_year = new Date().getFullYear();
        this.repository = repository;
    }

    async index(){
        logger.info("[InflationService] index init");
        const data = await this.repository.findAll();
        logger.info("[InflationService] index finish");
        return data;
    }

    async externalIndex(){
        logger.info("[InflationService] externalIndex init");

        const base_url = "https://servicodados.ibge.gov.br/api/v3/agregados";
        const url = `${base_url}/1737/periodos/200001-${this.current_year}05/variaveis/63?localidades=N1[all]`;
        const { data } = await axios.get(url);

        const result = this.#mapExternalDataToInflationModel(data[0]);

        logger.info("[InflationService] externalIndex finish");
        return result;
    }

    async accumulatedIndex(params){
        logger.info("[InflationService] accumulatedIndex init");
        const { start_date, end_date } = params;
        const payload = { start_date, end_date };
        const data = await this.repository.accumulatedIndex(payload);
        logger.info("[InflationService] accumulatedIndex finish");
        return data;
    }

    async upsert() {
        logger.info("[InflationService] upsert init");
        try {
            const data = await this.externalIndex();
            const results = [];

            for (const item of data) {
                const savedData = await this.repository.upsertInflation(item);
                results.push(savedData);
            }

            logger.info("[InflationService] upsert success");
            return results;
        } catch (error) {
            logger.error("[InflationService] upsert error", error);
        }
    }

    #mapExternalDataToInflationModel(data){ 
        const inflations = data.resultados[0].series[0].serie;
        const result = [];

        for(const [key, percentual] of Object.entries(inflations)){
            const year = parseInt(key.slice(0, 4), 10);
            const month = parseInt(key.slice(4, 6), 10);
            result.push({year, month, percentual: parseFloat(percentual)});
        }
        
        return result;
    }


    
}