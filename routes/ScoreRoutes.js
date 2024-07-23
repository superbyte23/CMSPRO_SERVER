import express from "express";
import { create, findScoreByJudge } from "../controllers/ScoreController.js";

const router = express.Router();
router.get("/score/findScoreByJudge/:program_id/:judge_id/", findScoreByJudge);
router.post("/score", create);

export default router;
