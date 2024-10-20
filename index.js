import AdminJSExpress from "@adminjs/express";
import * as AdminJSMongoose from "@adminjs/mongoose";
import AdminJS from "adminjs";

import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import Message from "./models/Message.js";
import Patient from "./models/Patient.js";
import Donation from "./models/PatientDonation.js";
import Student from "./models/Student.js";
import StudentDonation from "./models/StudentDonation.js";

import patientRoutes from "./routes/patientRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database,
});

const start = async () => {
  const adminOptions = {
    resources: [Donation, StudentDonation, Patient, Message, Student],
  };

  const admin = new AdminJS(adminOptions);

  const adminRouter = AdminJSExpress.buildRouter(admin);
  app.use(admin.options.rootPath, adminRouter);
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

start();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);




app.use("/api/patients", patientRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/message", messageRoutes);

app.listen(PORT, (error) => {
  if (!error) {
    console.log(
      `Server is successfully running, and app is listening on port ${PORT}`
    );
  } else {
    console.log("Error occurred, server can't start", error);
  }
});
