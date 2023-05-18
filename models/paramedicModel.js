import { Schema, model } from "mongoose";

const paramedicSchema = new Schema({
  // generated_id: {
  //   type: Number,
  //   required: true,
  // },
  nick_name: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  father_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  citizenship: {
    type: String,
    required: true,
  },
  sejel_place: {
    type: String,
    required: true,
  },
  sejel_number: {
    type: Number,
    required: true,
  },
  mother_name: {
    type: String,
    required: true,
  },
  date_of_birth: {
    type: Date,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

const Paramedic = model("Paramedic", paramedicSchema);
export default Paramedic;
