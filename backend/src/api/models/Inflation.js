import mongoose from "mongoose";

const InflationSchema = new mongoose.Schema({
        id: {type: String, required: true},
        year: { type: Number, required: true },
        month: { type: Number, required: true },
        percentual: { type: Number, required: true },
       }, {
        timestamps: true,
        collection: 'Inflations'
      }
)

export default mongoose.model('Inflation', InflationSchema);