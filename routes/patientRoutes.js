import express from "express";
import authorization from "../middleware/adminAuth.js";
import superAdminAuth from "../middleware/superAdminAuth.js";

const router = express.Router();

import patientController from "../controllers/patientController.js";

// get all patients
router.get("/", superAdminAuth, patientController.getAllPatients);

// create a new patient
router.post("/", authorization, patientController.addPatient);

// get a specific patient by ID
router.get("/:id", authorization, patientController.getPatient);

// update a specific patient by ID
router.patch("/:id", authorization, patientController.editPatient);

// delete an patient by ID
router.delete("/:id", authorization, patientController.deletePatient);

export default router;
