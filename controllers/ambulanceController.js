import AmbulanceModel from "../models/ambulanceModel.js";

class Ambulance {
  async getAllAmbulances(req, res, next) {
    try {
      const response = await AmbulanceModel.find({});
      res.status(200).send({ success: true, data: response });
    } catch (error) {
      next(error);
    }
  }

  async getAmbulance(req, res, next) {
    try {
      const { id } = req.params;
      const response = await AmbulanceModel.findOne({ _id: id });
      if (!response) {
        return res
          .status(404)
          .send({ success: false, message: "Ambulance not found" });
      }
      res.status(200).send({ success: true, data: response });
    } catch (error) {
      next(error);
    }
  }

  async editAmbulance(req, res, next) {
    try {
      const id = { _id: req.params.id };
      const update = req.body;
      const response = await AmbulanceModel.findByIdAndUpdate(
        id,
        { $set: update },
        { new: true }
      );
      if (!response) {
        return res
          .status(404)
          .send({ success: false, message: "Ambulance not found" });
      }
      res.status(200).send({ success: true, data: response });
    } catch (error) {
      next(error);
    }
  }

  async deleteAmbulance(req, res, next) {
    try {
      const { id } = req.params;
      const response = await AmbulanceModel.findByIdAndDelete({ _id: id });
      if (!response) {
        return res
          .status(404)
          .send({ success: false, message: "Ambulance not found" });
      }
      res.status(200).send({ success: true, data: response });
    } catch (error) {
      next(error);
    }
  }

  async addAmbulance(req, res, next) {
    try {
      const { name } = req.body;

      // Validate user input
      if (!name) {
        res.status(400).send("Name is required");
      }

      // Check if ambulance already exists
      const existingAmbulance = await AmbulanceModel.findOne({ name });

      if (existingAmbulance) {
        return res.status(409).send("Ambulance already exists");
      }

      const ambulance = await AmbulanceModel.create({
        ...req.body,
      });

      res.status(201).json(ambulance);
    } catch (error) {
      if (error) return next(error);
      return res.status(400).send(`Error: ${error}`);
    }
  }
}

const ambulanceController = new Ambulance();
export default ambulanceController;
