import express from "express";
import postRoute from "./routes/post.routes";
import cors from "cors";

function createApp() {
    const app = express();

    app.use(express.json());

    app.use("/api", postRoute);

    const corsOption = {
        origin: "*",
    };

    app.use(cors(corsOption));

    return app;
}

export default createApp;
