import express from "express";
const router = express.Router();
import hospitalController from "../controllers/hospitalController.js";
import imageUpload from "../middleware/imageUpload.js";
import userAuth from "../middleware/userAuth.js";
import adminAuth from "../middleware/adminAuth.js";

router.get("/", userAuth, hospitalController.getAllHospitals);
router.get("/:id", userAuth, hospitalController.getHospital);
router.delete("/:id", userAuth, adminAuth, hospitalController.deleteHospital);
router.patch("/:id", userAuth, adminAuth, hospitalController.editHospital);
router.post(
  "/",
  imageUpload,
  userAuth,
  adminAuth,
  hospitalController.addHospital
);

export default router;
