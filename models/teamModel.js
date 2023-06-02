import { Schema, model } from "mongoose";

const teamSchema = new Schema({
  team_name: {
    type: String,
    required: true,
  },
  mission_leader: {
    type: String,
    required: true,
  },
  driver: {
    type: String,
    required: true,
  },
  first_paramedic: {
    type: String,
    required: true,
  },
  second_paramedic: {
    type: String,
    required: false,
  },
  ambulance: {
    type: String,
    required: true,
  },
});

const Team = model("Team", teamSchema);
export default Team;
