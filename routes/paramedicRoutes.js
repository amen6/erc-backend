import express from "express";
const router = express.Router();

import paramedicController from "../controllers/paramedicController.js";
import userAuth from "../middleware/userAuth.js";
import adminAuth from "../middleware/adminAuth.js";

// get all Paramedics
router.get("/", userAuth, adminAuth, paramedicController.getAllParamedics);

// create a new Paramedic
router.post("/", userAuth, adminAuth, paramedicController.addParamedic);

// get a specific Paramedic by ID
router.get("/:id", userAuth, adminAuth, paramedicController.getParamedic);

// update a specific Paramedic by ID
router.patch("/:id", userAuth, adminAuth, paramedicController.editParamedic);

// delete an Paramedic by ID
router.delete("/:id", userAuth, adminAuth, paramedicController.deleteParamedic);

// Login
router.post("/login", paramedicController.login);

export default router;
