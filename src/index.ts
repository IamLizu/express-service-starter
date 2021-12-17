import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import config from "./config";
import defaultRoutes from "./resources/default/default.router";

const app: Application = express();

// Root middleware
app.use(cors()); // https://yarnpkg.com/package/cors
app.use(express.json());
app.use(morgan("dev"));

// Define route
app.use("/", defaultRoutes);

const start = async () => {
  app.listen(config.port, () => {
    console.log(`${Date()}: Server started on port ${config.port}!`);
  });
};

start();
