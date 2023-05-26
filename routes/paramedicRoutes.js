import express from "express";
const router = express.Router();

import paramedicController from "../controllers/paramedicController.js";

// get all Paramedics
router.get("/", paramedicController.getAllParamedics);

// create a new Paramedic
router.post("/", paramedicController.addParamedic);

// get a specific Paramedic by ID
router.get("/:id", paramedicController.getParamedic);

// update a specific Paramedic by ID
router.patch("/:id", paramedicController.editParamedic);

// delete an Paramedic by ID
router.delete("/:id", paramedicController.deleteParamedic);

// Login
router.post("/login", paramedicController.login);

export default router;
