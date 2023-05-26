import express from "express";
const router = express.Router();

import imageUpload from "../middleware/imageUpload.js";
import ambulanceController from "../controllers/ambulanceController.js";

// get all events
router.get("/", ambulanceController.getAllAmbulances);

// create a new event
router.post("/", imageUpload, ambulanceController.addAmbulance);

// get a specific event by ID
router.get("/:id", ambulanceController.getAmbulance);

// update a specific event by ID
router.patch("/:id", ambulanceController.editAmbulance);

// delete an event by ID
router.delete("/:id", ambulanceController.deleteAmbulance);

export default router;
