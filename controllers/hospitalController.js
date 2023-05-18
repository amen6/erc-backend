import HospitalModel from "../models/hospitalModel.js";

class Hospital {
  async getAllHospitals(req, res, next) {
    try {
      const response = await HospitalModel.find({});
      res.status(200).send({ success: true, data: response });
    } catch (error) {
      next(error);
    }
  }

  async getHospital(req, res, next) {
    try {
      const { id } = req.params;
      const response = await HospitalModel.findOne({ _id: id });
      if (!response) {
        return res
          .status(404)
          .send({ success: false, message: "Hospital not found" });
      }
      res.status(200).send({ success: true, data: response });
    } catch (error) {
      next(error);
    }
  }

  async editHospital(req, res, next) {
    try {
      const id = { _id: req.params.id };
      const update = req.body;
      const response = await HospitalModel.findByIdAndUpdate(
        id,
        { $set: update },
        { new: true }
      );
      if (!response) {
        return res
          .status(404)
          .send({ success: false, message: "Hospital not found" });
      }
      res.status(200).send({ success: true, data: response });
    } catch (error) {
      next(error);
    }
  }

  async deleteHospital(req, res, next) {
    try {
      const { id } = req.params;
      const response = await HospitalModel.findByIdAndDelete({ _id: id });
      if (!response) {
        return res
          .status(404)
          .send({ success: false, message: "Hospital not found" });
      }
      res.status(200).send({ success: true, data: response });
    } catch (error) {
      next(error);
    }
  }

  async addHospital(req, res, next) {
    try {
      const { name } = req.body;

      // Validate user input
      if (!name) {
        res.status(400).send("Name is required");
      }

      // Check if Hospital already exists
      const existingHospital = await HospitalModel.findOne({ name });

      if (existingHospital) {
        return res.status(409).send("Hospital already exists");
      }

      const hospital = await HospitalModel.create({
        name: name,
      });

      res.status(201).json(hospital);
    } catch (error) {
      if (error) return next(error);
      return res.status(400).send(`Error: ${error}`);
    }
  }
}

const hospitalController = new Hospital();
export default hospitalController;
