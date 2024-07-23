import express from "express";
import {
  create,
  deleteMultiple,
  destroy,
  findAll,
  findByProgram,
  update,
} from "../controllers/TabulatorController.js";

const router = express.Router();

router.get("/tabulators", findAll);
router.get("/tabulators/findbyProgram/:id", findByProgram);
router.post("/tabulators", create);
router.patch("/tabulators/:id", update);
router.delete("/tabulators", deleteMultiple);
router.delete("/tabulators/:id", destroy);

export default router;
