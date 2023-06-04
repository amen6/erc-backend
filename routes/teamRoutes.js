import express from "express";
const router = express.Router();
import teamController from "../controllers/teamController.js";
import userAuth from "../middleware/userAuth.js";
import adminAuth from "../middleware/adminAuth.js";

router.get("/", userAuth, teamController.getAllTeams);
router.get("/:id", userAuth, teamController.getTeam);
router.delete("/:id", userAuth, adminAuth, teamController.deleteTeam);
router.patch("/:id", userAuth, adminAuth, teamController.editTeam);
router.post("/", userAuth, adminAuth, teamController.addTeam);

export default router;
