import President from '../models/President.js'
import logger from '../utils/logger.js'

export class PresidentRepository{
    async findAll(){
        logger.info("[PresidentRepository] findAll init");
        const presidents = await President.find();
        logger.info("[PresidentRepository] findAll finish");
        return presidents;
    }
}