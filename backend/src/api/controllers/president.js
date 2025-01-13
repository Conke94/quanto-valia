import logger from '../utils/logger.js'

export class PresidentController{
    constructor(service){
        this.service = service;

        this.index = this.index.bind(this);
    }

    async index(req, res){
        try{
            logger.info("[PresidentController] index init");
            const data = await this.service.index();
            logger.info("[PresidentController] index success");
            res.status(200).send(data);
        } catch (error){
            logger.info("[PresidentController] index error", error);
            res.status(400).send(error);
        } finally {
            logger.info("[PresidentController] index finish");
        }
    }
}