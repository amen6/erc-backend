import { Schema, model } from "mongoose";

const ambulanceSchema = new Schema({
  name: { type: String, required: true, unique: true },
  image: {
    type: String,
    required: true,
  },
  fuel_type: { type: String, required: true, enum: ["gasoline", "fuel"] },
  fuel_percentage: { type: Number, required: true, min: 0, max: 100 },
  out_of_service: { type: Boolean, required: true, default: false },
});
const Ambulance = model("Ambulance", ambulanceSchema);
export default Ambulance;
