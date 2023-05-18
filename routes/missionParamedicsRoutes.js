import express from "express";
const router = express.Router();

import missionParamedicsController from "../controllers/missionParamedicsController.js";

// get all events
router.get("/", missionParamedicsController.getAllMissionParamedics);

// create a new event
router.post("/", missionParamedicsController.createMissionParamedics);

// get a specific event by ID
router.get("/:id", missionParamedicsController.getMissionParamedics);

// update a specific event by ID
router.patch("/:id", missionParamedicsController.editMissionParamedics);

// delete an event by ID
router.delete("/:id", missionParamedicsController.deleteMissionParamedics);

export default router;
