import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
// import cookieParser from "cookie-parser";

import connectDB from "./config/db.js";
import patientRoutes from "./routes/patientRoutes.js";
import ambulanceRoutes from "./routes/ambulanceRoutes.js";
import missionRoutes from "./routes/missionRoutes.js";
import caseRouter from "./routes/caseRoutes.js";
import hospitalRouter from "./routes/hospitalRoutes.js";
import adminRouter from "./routes/adminRoutes.js";
import paramedicRouter from "./routes/paramedicRoutes.js";
import missionParamedicsRouter from "./routes/missionParamedicsRoutes.js";

dotenv.config();
connectDB();

const PORT = process.env.PORT || 6000;
const app = new express();

// MIDDLEWARE
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
// app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(function (err, req, res, next) {
  res.status(err.status || 500).send({
    success: false,
    message: err.message,
  });
});

// Routes
app.get("/", (req, res) => {
  res.send("API is running ...");
});
app.use("/hospital", hospitalRouter);
app.use("/admin", adminRouter);
app.use("/patient", patientRoutes);
app.use("/ambulance", ambulanceRoutes);
app.use("/mission", missionRoutes);
app.use("/case", caseRouter);
app.use("/paramedic", paramedicRouter);
app.use("/missionparamedics", missionParamedicsRouter);

app.use("/uploads", express.static("./uploads"));

// Port
app.listen(
  PORT,
  console.log(`Server Running in ${process.env.NODE_ENV} mode on Port ${PORT}`)
);
