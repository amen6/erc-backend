import Team from "../models/teamModel.js";

class TeamController {
  async getAllTeams(req, res, next) {
    try {
      const response = await Team.find({})
        .populate("mission_leader_id", "nick_name")
        .populate("driver_id", "nick_name")
        .populate("first_paramedic_id", "nick_name")
        .populate("second_paramedic_id", "nick_name")
        .populate("ambulance_id", "name");

      res.status(200).json({ success: true, data: response });
    } catch (error) {
      next(error);
    }
  }

  async getTeam(req, res, next) {
    try {
      const { id } = req.params;
      const response = await Team.findOne({ _id: id })
        .populate("mission_leader_id", "nick_name")
        .populate("driver_id", "nick_name")
        .populate("first_paramedic_id", "nick_name")
        .populate("second_paramedic_id", "nick_name")
        .populate("ambulance_id", "name");

      if (!response) {
        return res
          .status(404)
          .json({ success: false, message: "Team not found" });
      }
      res.status(200).json({ success: true, data: response });
    } catch (error) {
      next(error);
    }
  }

  async addTeam(req, res, next) {
    try {
      const newTeam = await Team.create(req.body);
      res.status(201).json({ success: true, data: newTeam });
    } catch (error) {
      next(error);
    }
  }

  async editTeam(req, res, next) {
    try {
      const { id } = req.params;
      const updatedTeams = await Team.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!updatedTeams) {
        return res
          .status(404)
          .json({ success: false, message: "Team not found" });
      }
      res.status(200).json({ success: true, data: updatedTeams });
    } catch (error) {
      next(error);
    }
  }

  async deleteTeam(req, res, next) {
    try {
      const { id } = req.params;
      const deletedTeam = await Team.findByIdAndDelete(id);
      if (!deletedTeam) {
        return res
          .status(404)
          .json({ success: false, message: "Mission Paramedics not found" });
      }
      res.status(200).json({ success: true, data: deletedTeam });
    } catch (error) {
      next(error);
    }
  }
}

export default new TeamController();
