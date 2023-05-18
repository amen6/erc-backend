import { Schema, model } from "mongoose";

const caseSchema = new Schema({
  name: { type: String, required: true },
});
const Case = model("Case", caseSchema);
export default Case;
