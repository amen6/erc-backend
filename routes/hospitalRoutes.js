import express from "express";
const router = express.Router();
import hospitalController from "../controllers/hospitalController.js";

router.get("/", hospitalController.getAllHospitals);
router.get("/:id", hospitalController.getHospital);
router.delete("/:id", hospitalController.deleteHospital);
router.patch("/:id", hospitalController.editHospital);
router.post("/", hospitalController.addHospital);

export default router;
