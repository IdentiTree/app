import errorHandler from "errorhandler";
import app from "./app";
import { agentInit } from "./controllers/agentControllers";


/**
 * Error Handler. Provides full stack
 */
if (process.env.NODE_ENV === "development") {
    app.use(errorHandler());
}

/**
 * Loads Application Agent 
 */

 agentInit().then((agent) => {
     console.log("works!", agent)
 })

/**
 * Start Express server.
 */
const server = app.listen(app.get("port"), () => {
    console.log(
        "  App is running at http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
    );
    console.log("  Press CTRL-C to stop\n");
});

export default server;
