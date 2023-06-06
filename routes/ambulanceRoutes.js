import express from "express";
const router = express.Router();

import imageUpload from "../middleware/imageUpload.js";
import ambulanceController from "../controllers/ambulanceController.js";
import userAuth from "../middleware/userAuth.js";
import adminAuth from "../middleware/adminAuth.js";

// get all events
router.get("/", userAuth, adminAuth, ambulanceController.getAllAmbulances);

// create a new event
router.post("/", userAuth, adminAuth, ambulanceController.addAmbulance);

// get a specific event by ID
router.get("/:id", userAuth, adminAuth, ambulanceController.getAmbulance);

// update a specific event by ID
router.patch("/:id", userAuth, adminAuth, ambulanceController.editAmbulance);

// delete an event by ID
router.delete("/:id", userAuth, adminAuth, ambulanceController.deleteAmbulance);

export default router;
