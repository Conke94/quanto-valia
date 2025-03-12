import logger from '../utils/logger.js'

export class PresidentService{
    constructor(repository){
        this.repository = repository;
    }

    async index(){
        logger.info("[PresidentService] index init");
        const data = await this.repository.findAll();
        logger.info("[PresidentService] index finish");
        return data;
    }
}