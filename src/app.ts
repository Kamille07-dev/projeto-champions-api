import express, {json} from "express";
import { getPlayer } from "./controllers/players-controller";
import router from "./routes/routes";
import cors from "cors"

function createApp(){

    const app = express()

    app.use(json());

    app.use("/api", router);

    const corsOptions = {
        origin: "",
        methods: ["GET"],
    }

    app.use(cors());

    return app;
}

export default createApp;
