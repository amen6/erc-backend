import { Schema, model } from "mongoose";

const missionParamedicsSchema = new Schema({
  mission_id: {
    type: Schema.Types.ObjectId,
    ref: "Mission",
    required: true,
  },
  hospital_acceptance: {
    type: Boolean,
    required: true,
  },
  shift_leader_id: {
    type: Schema.Types.ObjectId,
    ref: "Paramedic",
    required: true,
  },
  mission_leader_id: {
    type: Schema.Types.ObjectId,
    ref: "Paramedic",
    required: true,
  },
  paramedics_id: {
    type: Schema.Types.ObjectId,
    ref: "Paramedic",
    required: true,
  },
  driver_id: {
    type: Schema.Types.ObjectId,
    ref: "Paramedic",
    required: true,
  },
  caller_number: {
    type: String,
    required: true,
  },
  call_taker_id: {
    type: Schema.Types.ObjectId,
    ref: "Paramedic",
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
});

const MissionParamedics = model("MissionParamedics", missionParamedicsSchema);
export default MissionParamedics;
