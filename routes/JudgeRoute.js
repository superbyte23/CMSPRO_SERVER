import express from "express";
import {
  create,
  deleteMultiple,
  destroy,
  findAll,
  findByProgram,
  findJudgeId,
  findJudgesPrograms,
  update,
} from "../controllers/JudgesController.js";

const router = express.Router();

router.get("/judges", findAll);
router.get("/judges/findJudgeId/:user_id/:program_id", findJudgeId);
router.get("/judges/findbyProgram/:id", findByProgram);
router.get("/judges/findJudgesPrograms/:id", findJudgesPrograms);
router.post("/judges", create);
router.patch("/judges/:id", update);
router.delete("/judges", deleteMultiple);
router.delete("/judges/:id", destroy);

export default router;
