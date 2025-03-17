import logger from '../../utils/logger.js'

export class MinimumWageController{
    constructor(service){
        this.service = service;

        this.upsert = this.upsert.bind(this);
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

    async upsert(req, res){
        try{
            logger.info("[InflationController] upsert init");
            const data = await this.service.upsert();
            logger.info("[InflationController] upsert success");
            res.status(200).send(data);
        } catch (error){
            console.log(error);
            logger.info("[InflationController] upsert error", error);
            res.status(400).send(error);
        } finally {
            logger.info("[InflationController] upsert finish");
        }
    }
}