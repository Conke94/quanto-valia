import logger from '../../utils/logger.js'

export class MinimumWageController{
    constructor(service){
        this.service = service;

        this.upsert = this.upsert.bind(this);
        this.externalIndex = this.externalIndex.bind(this);
        this.accumulatedIndex = this.accumulatedIndex.bind(this);
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

    async accumulatedIndex(req, res){
        try{
            logger.info("[MinimumWageController] accumulatedIndex init");
            const { start_month, start_year, end_month, end_year } = req.query;
            const payload = { 
                start_date: {month: start_month, year: start_year}, 
                end_date: {month: end_month, year: end_year} 
            };
            const data = await this.service.accumulatedIndex(payload);
            logger.info("[MinimumWageController] accumulatedIndex success");
            res.status(200).send(data);
        } catch (error){
            logger.info("[MinimumWageController] accumulatedIndex error", error);
            console.log({error});
            res.status(400).send(error);
        } finally {
            logger.info("[MinimumWageController] accumulatedIndex finish");
        }
    }

    async upsert(req, res){
        try{
            logger.info("[MinimumWageController] upsert init");
            const data = await this.service.upsert();
            logger.info("[MinimumWageController] upsert success");
            res.status(200).send(data);
        } catch (error){
            console.log(error);
            logger.info("[MinimumWageController] upsert error", error);
            res.status(400).send(error);
        } finally {
            logger.info("[MinimumWageController] upsert finish");
        }
    }
}