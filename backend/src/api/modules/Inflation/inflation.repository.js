import Inflation from '../../models/Inflation.js'
import logger from '../../utils/logger.js'

export class InflationRepository{
    async findAll(){
        logger.info("[InflationRepository] findAll init");
        const inflations = await Inflation.find().sort({ year: 1, month: 1 });
        logger.info("[InflationRepository] findAll finish");
        return inflations;
    }

    async accumulatedIndex(params){
        logger.info("[InflationRepository] accumulatedIndex init");
        const { start_date, end_date } = params;

        const result = await Inflation.aggregate([
            {
                $match: {
                    $and: [
                        { $or: [
                            { year: { $gt: Number(start_date.year) } },
                            { year: Number(start_date.year), month: { $gte: Number(start_date.month) } }
                        ]},
                        { $or: [
                            { year: { $lt: Number(end_date.year) } },
                            { year: Number(end_date.year), month: { $lte: Number(end_date.month) } }
                        ]}
                    ]
                }
            }, {
              $group: { '_id': null,  total: { $sum: '$percentual' }}
            }
          ]);

        logger.info("[InflationRepository] accumulatedIndex finish");
        return result.length > 0 ? result[0] : 0;
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