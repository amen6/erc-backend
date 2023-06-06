import PatientModel from "../models/patientModel.js";

class Patient {
  async getAllPatients(req, res, next) {
    try {
      const response = await PatientModel.find({});
      res.status(200).json({ success: true, response });
    } catch (error) {
      next(error);
    }
  }

  async getAllPatientsNames(req, res, next) {
    try {
      const response = await PatientModel.find({}, "first_name last_name");
      res.status(200).json({ success: true, response });
    } catch (error) {
      next(error);
    }
  }

  async getPatient(req, res, next) {
    try {
      const { id } = req.params;
      const response = await PatientModel.findOne({ _id: id });
      res.status(200).json({ success: true, response });
    } catch (error) {
      next(error);
    }
  }

  async deletePatient(req, res, next) {
    try {
      const { id } = req.params;
      const response = await PatientModel.findByIdAndDelete({ _id: id });
      res.status(200).json({ success: true, response });
    } catch (error) {
      next(error);
    }
  }

  async editPatient(req, res, next) {
    try {
      const { id } = req.params;
      const update = req.body;
      const response = await PatientModel.findByIdAndUpdate(
        id,
        {
          $set: update,
        },
        { new: true }
      );
      res.status(200).json({ success: true, response });
    } catch (error) {
      next(error);
    }
  }

  async addPatient(req, res, next) {
    try {
      // Get Patient input
      const {
        first_name,
        last_name,
        date_of_birth,
        phone,
        address,
        description,
        guarantor,
      } = req.body;

      // Validate Patient input
      if (!(first_name && last_name && date_of_birth && address)) {
        return res.status(400).json("Please fill the required inputs");
      }

      // Check if Patient already exists
      const oldPatient = await PatientModel.findOne({ phone });

      if (oldPatient) {
        return res
          .status(409)
          .json("Phone Number Already Exists. Please Login");
      }

      // Create Patient in our database
      const patient = await PatientModel.create({
        first_name,
        last_name,
        phone,
        date_of_birth,
        address,
        description,
        guarantor,
      });

      // Return new Patient
      res.status(201).json(patient);
    } catch (error) {
      next(error);
    }
  }

  async countAllPatients(req, res, next) {
    try {
      const count = await PatientModel.count();
      res.status(200).json({ success: true, data: count });
    } catch (error) {
      next(error);
    }
  }
}

const PatientController = new Patient();
export default PatientController;
