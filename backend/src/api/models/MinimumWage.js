import mongoose from "mongoose";

const MinimumWageSchema = new mongoose.Schema({
        id: {type: String, required: true},
        year: { type: Number, required: true },
        month: { type: Number, required: true },
        value: { type: mongoose.Types.Decimal128, required: true },
       }, {
        timestamps: true,
        collection: 'MinimumWages'
      }
)

export default mongoose.model('MinimumWage', MinimumWageSchema);