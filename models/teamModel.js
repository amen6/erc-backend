import { Schema, model } from "mongoose";

const teamSchema = new Schema({
  mission_leader_id: {
    type: Schema.Types.ObjectId,
    ref: "Paramedic",
    required: true,
  },
  driver_id: {
    type: Schema.Types.ObjectId,
    ref: "Paramedic",
    required: true,
  },
  first_paramedic_id: {
    type: Schema.Types.ObjectId,
    ref: "Paramedic",
    required: true,
  },
  second_paramedic_id: {
    type: Schema.Types.ObjectId,
    ref: "Paramedic",
    required: false,
  },
  ambulance_id: {
    type: Schema.Types.ObjectId,
    ref: "Ambulance",
    required: true,
  },
});

const Team = model("Team", teamSchema);
export default Team;
