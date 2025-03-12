import {InflationController, InflationService, InflationRepository} from './index.js'
import logger from '../../utils/logger.js'

export class InflationFactory{
    static createInstance(){
        logger.info("[InflationFactory] createInstance init");

        const repository = new InflationRepository();
        const service = new InflationService(repository);
        const controller = new InflationController(service);
        
        logger.info("[InflationFactory] createInstance finish");
        return { controller };
    }
}