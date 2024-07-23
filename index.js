import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import EventRoute from "./routes/EventRoute.js";
import CategoryRoute from "./routes/CategoryRoute.js";
import ProgramRoute from "./routes/ProgramRoute.js";
import CriteriaRoute from "./routes/CriteriaRoute.js";
import ParticipantRoute from "./routes/ParticipantRoute.js";
import DepartmentRoute from "./routes/DepartmentRoute.js";
import JudgeRoute from "./routes/JudgeRoute.js";
import TabulatorRoute from "./routes/TabulatorRoute.js";
import ScoreRoute from "./routes/ScoreRoutes.js";
import DeductionRoute from "./routes/DeductionRoute.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname + "/public")));
app.use(UserRoute);
app.use(EventRoute);
app.use(CategoryRoute);
app.use(ProgramRoute);
app.use(CriteriaRoute);
app.use(ParticipantRoute);
app.use(DepartmentRoute);
app.use(JudgeRoute);
app.use(TabulatorRoute);
app.use(ScoreRoute);
app.use(DeductionRoute);
app.listen(5000, () => console.log("Server up and running..."));
