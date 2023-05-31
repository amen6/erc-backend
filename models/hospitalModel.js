import { Schema, model } from "mongoose";

const hospitalSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  available: { type: Boolean, required: true },
  hospital_code: { type: String, required: true },
});
const Hospital = model("Hospital", hospitalSchema);
export default Hospital;
