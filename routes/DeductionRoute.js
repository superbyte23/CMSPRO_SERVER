import express from "express";
import { create, findByProgram } from "../controllers/DeductionController.js";

const router = express.Router();
router.get("/deduction/findByProgramAndJudges/:program_id/:judge_id", findByProgram);
router.post("/deduction", create);

export default router;
