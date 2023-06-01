import express from "express";
const router = express.Router();
import teamController from "../controllers/teamController.js";

router.get("/", teamController.getAllTeams);
router.get("/:id", teamController.getTeam);
router.delete("/:id", teamController.deleteTeam);
router.patch("/:id", teamController.editTeam);
router.post("/", teamController.addTeam);

export default router;
