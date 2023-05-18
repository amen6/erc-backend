import { Schema, model } from "mongoose";

const ambulanceSchema = new Schema({
  name: { type: String, required: true },
});
const Ambulance = model("Ambulance", ambulanceSchema);
export default Ambulance;
