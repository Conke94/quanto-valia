import logger from '../../utils/logger.js'

export class MinimumWageController{
    constructor(service){
        this.service = service;

        this.externalIndex = this.externalIndex.bind(this);
    }


    async externalIndex(req, res){
        try{
            logger.info("[MinimumWageController] externalIndex init");
            const data = await this.service.externalIndex();
            logger.info("[MinimumWageController] externalIndex success");
            res.status(200).send(data);
        } catch (error){
            logger.info("[MinimumWageController] externalIndex error", error);
            res.status(400).send(error);
        } finally {
            logger.info("[MinimumWageController] externalIndex finish");
        }
    }
}