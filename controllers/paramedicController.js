import Paramedic from "../models/paramedicModel.js";

class ParamedicController {
  async getAllParamedics(req, res, next) {
    try {
      const paramedics = await Paramedic.find({});
      res.status(200).send({ success: true, data: paramedics });
    } catch (error) {
      next(error);
    }
  }

  async getParamedic(req, res, next) {
    try {
      const { id } = req.params;
      const paramedic = await Paramedic.findOne({ _id: id });
      if (!paramedic) {
        return res
          .status(404)
          .send({ success: false, message: "Paramedic not found" });
      }
      res.status(200).send({ success: true, data: paramedic });
    } catch (error) {
      next(error);
    }
  }

  async deleteParamedic(req, res, next) {
    try {
      const { id } = req.params;
      const paramedic = await Paramedic.findByIdAndDelete(id);
      if (!paramedic) {
        return res
          .status(404)
          .send({ success: false, message: "Paramedic not found" });
      }
      res
        .status(200)
        .send({ success: true, message: "Paramedic deleted successfully" });
    } catch (error) {
      next(error);
    }
  }

  async editParamedic(req, res, next) {
    try {
      const { id } = req.params;
      const paramedic = await Paramedic.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!paramedic) {
        return res
          .status(404)
          .send({ success: false, message: "Paramedic not found" });
      }
      res.status(200).send({ success: true, data: paramedic });
    } catch (error) {
      next(error);
    }
  }

  async addParamedic(req, res, next) {
    try {
      const { nick_name } = req.body;
      const oldParamedic = await Paramedic.findOne({ nick_name });

      if (oldParamedic) {
        return res.status(409).send("Paramedic Already Exist. Please Login");
      }

      const paramedic = await Paramedic.create(req.body);
      res.status(201).send({ success: true, data: paramedic });
    } catch (error) {
      next(error);
    }
  }
}

const paramedicController = new ParamedicController();
export default paramedicController;
