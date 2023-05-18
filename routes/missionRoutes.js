import express from "express";
const router = express.Router();

import missionController from "../controllers/missionController.js";

// get all events
router.get("/", missionController.getAllMissions);

// create a new event
router.post("/", missionController.createMission);

// get a specific event by ID
router.get("/:id", missionController.getMission);

// update a specific event by ID
router.patch("/:id", missionController.updateMission);

// delete an event by ID
router.delete("/:id", missionController.deleteMission);

export default router;
