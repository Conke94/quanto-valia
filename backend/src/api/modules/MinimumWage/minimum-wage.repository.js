import MinimumWage from '../../models/MinimumWage.js'
import logger from '../../utils/logger.js'

export class MinimumWageRepository{
    async upsertMinimumWage(params) {
        logger.info("[MinimumWageRepository] upsertMinimumWage init");

        const { year, month, value } = params;
        const search = {year, month}; const payload = { value };

        const result = await MinimumWage.findOneAndUpdate(
            search, payload,
            { 
                upsert: true,
                new: true, 
                runValidators: true 
            }
        );

        logger.info("[MinimumWageRepository] upsertMinimumWage success", result);
        return result;
    }
}