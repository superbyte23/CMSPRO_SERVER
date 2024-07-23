import express from "express";
import {
  create,
  destroy,
  findAll,
  findByProgram,
  update,
  destroyMultiple,
} from "../controllers/ParticipantController.js";

const router = express.Router();

router.get("/participants", findAll);
router.get("/participants/findbyProgram/:id", findByProgram);
router.post("/participants", create);
router.patch("/participants/:id", update);
router.delete("/participants/:id", destroy);
router.delete("/participants", destroyMultiple);

export default router;
