import express from "express";
const router = express.Router();

import missionController from "../controllers/missionController.js";
import userAuth from "../middleware/userAuth.js";
import adminAuth from "../middleware/adminAuth.js";

// get all events
router.get("/", userAuth, adminAuth, missionController.getAllMissions);

// create a new event
router.post("/", userAuth, adminAuth, missionController.createMission);

// get a specific event by ID
router.get("/:id", userAuth, adminAuth, missionController.getMission);

// update a specific event by ID
router.patch("/:id", userAuth, adminAuth, missionController.updateMission);

// delete an event by ID
router.delete("/:id", userAuth, adminAuth, missionController.deleteMission);

export default router;
