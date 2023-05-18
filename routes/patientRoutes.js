import express from "express";
const router = express.Router();

import patientController from "../controllers/patientController.js";

// get all patients
router.get("/", patientController.getAllPatients);

// create a new patient
router.post("/", patientController.addPatient);

// get a specific patient by ID
router.get("/:id", patientController.getPatient);

// update a specific patient by ID
router.patch("/:id", patientController.editPatient);

// delete an patient by ID
router.delete("/:id", patientController.deletePatient);

export default router;
