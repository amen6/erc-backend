import CaseModel from "../models/caseModel.js";

class CaseController {
  async getAllCases(req, res, next) {
    try {
      const response = await CaseModel.find({});
      res.status(200).send({ success: true, data: response });
    } catch (error) {
      next(error);
    }
  }

  async getCase(req, res, next) {
    try {
      const { id } = req.params;
      const response = await CaseModel.findOne({ _id: id });
      if (!response) {
        return res
          .status(404)
          .send({ success: false, message: "Case not found" });
      }
      res.status(200).send({ success: true, data: response });
    } catch (error) {
      next(error);
    }
  }

  async editCase(req, res, next) {
    try {
      const id = { _id: req.params.id };
      const update = req.body;
      const response = await CaseModel.findByIdAndUpdate(
        id,
        { $set: update },
        { new: true }
      );
      if (!response) {
        return res
          .status(404)
          .send({ success: false, message: "Case not found" });
      }
      res.status(200).send({ success: true, data: response });
    } catch (error) {
      next(error);
    }
  }

  async deleteCase(req, res, next) {
    try {
      const { id } = req.params;
      const response = await CaseModel.findByIdAndDelete({ _id: id });
      if (!response) {
        return res
          .status(404)
          .send({ success: false, message: "Case not found" });
      }
      res.status(200).send({ success: true, data: response });
    } catch (error) {
      next(error);
    }
  }

  async addCase(req, res, next) {
    try {
      const { name } = req.body;

      // Validate user input
      if (!name) {
        res.status(400).send("Name is required");
      }

      // Check if Case already exists
      const existingCase = await CaseModel.findOne({ name });

      if (existingCase) {
        return res.status(409).send("Case already exists");
      }

      const Case = await CaseModel.create({
        name: name,
      });

      res.status(201).json(Case);
    } catch (error) {
      if (error) return next(error);
      return res.status(400).send(`Error: ${error}`);
    }
  }
}

const caseController = new CaseController();
export default caseController;
