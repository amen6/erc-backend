import MissionParamedics from "../models/missionParamedicsModel.js";

class MissionParamedicsController {
  async getAllMissionParamedics(req, res, next) {
    try {
      const response = await MissionParamedics.find({});
      res.status(200).json({ success: true, response });
    } catch (error) {
      next(error);
    }
  }

  async getMissionParamedics(req, res, next) {
    try {
      const { id } = req.params;
      const response = await MissionParamedics.findOne({ _id: id });
      if (!response) {
        return res
          .status(404)
          .json({ success: false, message: "Mission Paramedics not found" });
      }
      res.status(200).json({ success: true, response });
    } catch (error) {
      next(error);
    }
  }

  async createMissionParamedics(req, res, next) {
    try {
      const newMissionParamedics = await MissionParamedics.create(req.body);
      res.status(201).json({ success: true, response: newMissionParamedics });
    } catch (error) {
      next(error);
    }
  }

  async editMissionParamedics(req, res, next) {
    try {
      const { id } = req.params;
      const updatedMissionParamedics =
        await MissionParamedics.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedMissionParamedics) {
        return res
          .status(404)
          .json({ success: false, message: "Mission Paramedics not found" });
      }
      res
        .status(200)
        .json({ success: true, response: updatedMissionParamedics });
    } catch (error) {
      next(error);
    }
  }

  async deleteMissionParamedics(req, res, next) {
    try {
      const { id } = req.params;
      const deletedMissionParamedics =
        await MissionParamedics.findByIdAndDelete(id);
      if (!deletedMissionParamedics) {
        return res
          .status(404)
          .json({ success: false, message: "Mission Paramedics not found" });
      }
      res
        .status(200)
        .json({ success: true, response: deletedMissionParamedics });
    } catch (error) {
      next(error);
    }
  }
}

const missionParamedicsController = new MissionParamedicsController();
export default missionParamedicsController;
