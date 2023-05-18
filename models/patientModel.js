import { Schema, model } from "mongoose";

const patientSchema = new Schema({
  // generated_id: {
  //   type: Number,
  //   required: true,
  // },
  first_name: {
    type: String,
    required: true,
  },
  // father_name: {
  //   type: String,
  //   required: true,
  // },
  last_name: {
    type: String,
    required: true,
  },
  date_of_birth: {
    type: Date,
    required: true,
  },
  phone: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  guarantor: {
    type: String,
    required: false,
  },
});

const PatientModel = model("Patient", patientSchema);
export default PatientModel;
