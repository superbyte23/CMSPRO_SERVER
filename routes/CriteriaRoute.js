import express from "express";

import {
  create,
  destroy,
  destroyMultiple,
  findByProgram,
  findOne,
  update,
} from "../controllers/CriteriaController.js";

const router = express.Router();

router.get("/criteria/findbyProgram/:id", findByProgram);
router.get("/criteria/:id", findOne);
router.post("/criteria", create);
router.patch("/criteria/:id", update);
router.delete("/criteria/:id", destroy);
router.delete("/criteria", destroyMultiple);

export default router;
