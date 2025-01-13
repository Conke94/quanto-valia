import mongoose from "mongoose";

const PresidentSchema = new mongoose.Schema({
        name: { type: String, required: true },
        avatar: { type: String, required: false },
        start_date: { type: Date, required: true },
        end_date: { type: Date, required: false },
      }, {
        timestamps: true,
        collection: 'Presidents'
      }
)

export default mongoose.model('President', PresidentSchema);