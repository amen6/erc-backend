import MissionModel from "../models/missionModel.js";

function generateId() {
  let datenow = new Date().getFullYear();
  let n = 0;
  function innerFunction() {
    if (new Date().getFullYear() !== datenow) n = 0;
    n++;
    return n;
  }

  return innerFunction;
}

const idIncrementer = generateId();

class Mission {
  async getAllMissions(req, res, next) {
    try {
      const missions = await MissionModel.find({});
      res.status(200).json({ success: true, data: missions });
    } catch (error) {
      next(error);
    }
  }

  async getMission(req, res, next) {
    try {
      const { id } = req.params;
      // const mission = await MissionModel.findOne({
      //   _id: id,
      // });
      // if (!mission) {
      //   return res
      //     .status(404)
      //     .json({ success: false, message: "Mission not found" });
      // }
      // res.status(200).json({ success: true, data: mission });
      const mission = await MissionModel.aggregate([
        {
          $lookup: {
            from: "missionparamedics",
            localField: "_id",
            foreignField: "mission_id",
            as: "missionParamedics",
          },
        },
      ]);

      if (mission.length === 0) {
        return res
          .status(404)
          .json({ success: false, message: "Mission not found" });
      }

      const response = mission[0];
      res.status(200).json({ success: true, response });
    } catch (error) {
      next(error);
    }
  }

  async updateMission(req, res, next) {
    try {
      const { id } = req.params;
      const mission = await MissionModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!mission) {
        return res
          .status(404)
          .json({ success: false, message: "Mission not found" });
      }
      res.status(200).json({ success: true, data: mission });
    } catch (error) {
      next(error);
    }
  }

  async deleteMission(req, res, next) {
    try {
      const { id } = req.params;
      const mission = await MissionModel.findOne({
        _id: id,
      });

      if (!mission) {
        return res
          .status(404)
          .json({ success: false, message: "Mission not found" });
      }

      await MissionModel.deleteOne({ _id: id });

      res
        .status(200)
        .json({ success: true, message: "Mission deleted successfully" });
    } catch (error) {
      next(error);
    }
  }

  async createMission(req, res, next) {
    try {
      req.body.generated_id = idIncrementer();
      const mission = await MissionModel.create(req.body);
      res.status(201).json({ success: true, data: mission });
    } catch (error) {
      next(error);
    }
  }
}
const MissionController = new Mission();
export default MissionController;
