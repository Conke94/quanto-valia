import { MinimumWageController, MinimumWageService } from './index.js'
import logger from '../../utils/logger.js'

export class MinimumWageFactory{
    static createInstance(){
        logger.info("[InflationFactory] createInstance init");

        const repository = {};
        const service = new MinimumWageService(repository);
        const controller = new MinimumWageController(service);
        
        logger.info("[InflationFactory] createInstance finish");
        return { controller };
    }
}