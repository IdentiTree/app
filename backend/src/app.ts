import express from "express";
import compression from "compression";
import path from "path";
import mongoose from "mongoose";
import bluebird from "bluebird";
import { MONGODB_URI } from "./util/secrets";
import { connectToMongo } from './config/mongo';
import userRoutes from './routes/userRoutes';
import agentRoutes from './routes/agentRoutes';
import areaRoutes from './routes/areaRoutes';
import treeRoutes from './routes/treeRoutes';
import { errorHandler } from './middleware/errors';
import { createFakeUsers } from './data/seeder';

var cors = require('cors');

// Create Express server
const app = express();


var allowedOrigins = [
    'http://localhost:3000',
    'http://app.trees'];

app.use(cors({
    origin: function (origin: any, callback: any) {
        // allow requests with no origin 
        // (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

// Connect to MongoDB
const mongoUrl = MONGODB_URI || "mongodb://localhost:27017/local";


mongoose.Promise = bluebird;

connectToMongo(mongoUrl);

createFakeUsers();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(express.json());


app.use('/api/users', userRoutes);
app.use('/api/agent', agentRoutes);
app.use('/api/areas', areaRoutes);
app.use('/api/trees', treeRoutes);

app.use(errorHandler);

app.use("/",
    express.static(path.join(__dirname, "../../frontend/build/"), { maxAge: 31557600000 })
);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/build/index.html'));
});


/**
 * API examples routes.
 */

export default app;
