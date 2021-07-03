import express from "express";
import compression from "compression";
import path from "path";
import mongoose from "mongoose";
import bluebird from "bluebird";
import { MONGODB_URI } from "./util/secrets";
import { connectToMongo } from "./config/mongo";

// Controllers (route handlers)
import * as apiController from "./controllers/api";


// Create Express server
const app = express();

// Connect to MongoDB
const mongoUrl = MONGODB_URI;
mongoose.Promise = bluebird;

connectToMongo(mongoUrl);

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(express.json());

app.use("/",
    express.static(path.join(__dirname,"../../frontend/build/"), { maxAge: 31557600000 })
);

/**
 * API examples routes.
 */
app.get("/api", apiController.getApi);

export default app;
