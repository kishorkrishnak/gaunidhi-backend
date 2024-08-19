import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import * as AdminJSMongoose from "@adminjs/mongoose";

import express from "express";
import cors from "cors";
import gaushalaRoutes from "./routes/gaushalaRoutes.js";
import Donation from "./models/Donation.js";
import Gaushala from "./models/Gaushala.js";
import mongoose from "mongoose";

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
    resources: [Donation, Gaushala],
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

app.use("/api/gaushalas", gaushalaRoutes);

app.listen(PORT, (error) => {
  if (!error) {
    console.log(
      `Server is successfully running, and app is listening on port ${PORT}`
    );
  } else {
    console.log("Error occurred, server can't start", error);
  }
});
