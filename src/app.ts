import express from "express";
import postRoute from "./routes/post.routes";
import cors from "cors";
import commentRoute from "./routes/comment.routes";

function createApp() {
    const app = express();

    app.use(express.json());

    app.use("/api", postRoute);
    app.use("/api", commentRoute);

    const corsOption = {
        origin: "*",
    };

    app.use(cors(corsOption));

    return app;
}

export default createApp;
