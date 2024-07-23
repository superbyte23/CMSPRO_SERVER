import express from "express";

import {
  create,
  destroy,
  findAll,
  findByEvent,
  findOne,
  update,
} from "../controllers/ProgramController.js";

const router = express.Router();
router.get("/program/event/:id", findByEvent);
router.get("/program", findAll);
router.get("/program/:id", findOne);
router.post("/program", create);
router.patch("/program/:id", update);
router.delete("/program/:id", destroy);

export default router;
