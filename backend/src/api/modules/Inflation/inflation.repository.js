import Inflation from '../../models/Inflation.js'
import logger from '../../utils/logger.js'

export class InflationRepository{
    async findAll(){
        logger.info("[InflationRepository] findAll init");
        const inflations = await Inflation.find().sort({ year: 1, month: 1 });
        logger.info("[InflationRepository] findAll finish");
        return inflations;
    }

    async upsertInflation(params) {
        logger.info("[InflationRepository] upsertInflation init");

        const { year, month, percentual } = params;
        const search = {year, month}; const payload = { percentual };
        console.log(payload);

        const result = await Inflation.findOneAndUpdate(
            search, payload,
            { 
                upsert: true,
                new: true, 
                runValidators: true 
            }
        );

        logger.info("[InflationRepository] upsertInflation success", result);
        return result;
    }
}