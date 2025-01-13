import { PresidentController } from "../controllers/president.js"
import { PresidentService } from "../services/president.js"
import logger from '../utils/logger.js'

export class PresidentFactory{
    static createInstance(){
        logger.info("[PresidentFactory] Factory init");

        const service = new PresidentService();
        const controller = new PresidentController(service);
        
        logger.info("[PresidentFactory] Factory finish");
        return { controller };
    }
}