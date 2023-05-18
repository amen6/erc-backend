import express from "express";
const router = express.Router();

import caseController from "../controllers/caseController.js";

// get all events
router.get("/", caseController.getAllCases);

// create a new event
router.post("/", caseController.addCase);

// get a specific event by ID
router.get("/:id", caseController.getCase);

// update a specific event by ID
router.patch("/:id", caseController.editCase);

// delete an event by ID
router.delete("/:id", caseController.deleteCase);

export default router;
