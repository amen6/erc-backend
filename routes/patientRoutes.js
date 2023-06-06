import express from "express";
import authorization from "../middleware/adminAuth.js";

const router = express.Router();

import patientController from "../controllers/patientController.js";
import userAuth from "../middleware/userAuth.js";
import adminAuth from "../middleware/adminAuth.js";

// get all patients
router.get("/", userAuth, adminAuth, patientController.getAllPatients);

// get all patients
router.get("/count/", userAuth, adminAuth, patientController.countAllPatients);

// get all patients names
router.get(
  "/name/",
  userAuth,
  adminAuth,
  patientController.getAllPatientsNames
);

// create a new patient
router.post("/", userAuth, adminAuth, patientController.addPatient);

// get a specific patient by ID
router.get("/:id", userAuth, adminAuth, patientController.getPatient);

// update a specific patient by ID
router.patch("/:id", userAuth, adminAuth, patientController.editPatient);

// delete an patient by ID
router.delete("/:id", userAuth, adminAuth, patientController.deletePatient);

export default router;
