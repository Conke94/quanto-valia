import logger from '../../utils/logger.js'

export class InflationController{
    constructor(service){
        this.service = service;

        this.index = this.index.bind(this);
        this.upsert = this.upsert.bind(this);
        this.externalIndex = this.externalIndex.bind(this);
    }

    async index(req, res){
        try{
            logger.info("[InflationController] index init");
            const data = await this.service.index();
            logger.info("[InflationController] index success");
            res.status(200).send(data);
        } catch (error){
            logger.info("[InflationController] index error", error);
            res.status(400).send(error);
        } finally {
            logger.info("[InflationController] index finish");
        }
    }

    async externalIndex(req, res){
        try{
            logger.info("[InflationController] externalIndex init");
            const data = await this.service.externalIndex();
            logger.info("[InflationController] externalIndex success");
            res.status(200).send(data);
        } catch (error){
            logger.info("[InflationController] externalIndex error", error);
            res.status(400).send(error);
        } finally {
            logger.info("[InflationController] externalIndex finish");
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