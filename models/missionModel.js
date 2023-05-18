import { Schema, model } from "mongoose";

const missionSchema = new Schema({
  generated_id: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  ambulance_id: {
    type: Schema.Types.ObjectId,
    ref: "Ambulance",
    required: true,
  },
  depart: {
    type: Date,
    required: true,
  },
  return: {
    type: Date,
    required: true,
  },
  done: {
    type: Boolean,
    required: true,
  },
  mission_type: {
    type: String,
    enum: ["case 1", "case 2", "case 3", "case 4"],
    required: true,
  },
  case_id: {
    type: Schema.Types.ObjectId,
    ref: "Case",
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  patient_id: {
    type: Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
  from_hospital_id: {
    type: Schema.Types.ObjectId,
    ref: "Hospital",
    required: false,
  },
  from_house: {
    type: Boolean,
    required: false,
  },
  to_hospital_id: {
    type: Schema.Types.ObjectId,
    ref: "Hospital",
    required: false,
  },
  to_house: {
    type: Boolean,
    required: false,
  },
  mission_description: {
    type: String,
    required: false,
  },
  infectious_disease: {
    type: String,
    required: false,
  },
  doctor: {
    type: String,
    required: true,
  },
});

const Mission = model("Mission", missionSchema);
export default Mission;