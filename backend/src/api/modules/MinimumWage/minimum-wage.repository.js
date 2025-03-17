import MinimumWage from '../../models/MinimumWage.js'
import logger from '../../utils/logger.js'

export class MinimumWageRepository{
    async accumulatedIndex(params){
            logger.info("[MinimumWageRepository] accumulatedIndex init");
            const { start_date, end_date } = params;
    
            const data = await MinimumWage.aggregate([
                {
                    $match: {
                        $or: [
                            { year: Number(start_date.year), month: Number(start_date.month) },
                            { year: Number(end_date.year), month: Number(end_date.month) }
                        ]
                    }
                },
                {
                    $sort: { year: 1, month: 1 }
                },
                {
                    $group: {
                        _id: null,
                        initial_value: { $first: "$value" },
                        final_value: { $last: "$value" }
                    }
                },
                {
                    $project: { _id: 0 }
                }
            ]);

            logger.info("[MinimumWageRepository] accumulatedIndex finish");
            return data.length > 0 ? data[0] : null;
        }

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