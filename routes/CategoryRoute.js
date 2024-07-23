import express from "express";
import {
  create,
  destroy,
  findAll,
  findOne,
  update,
} from "../controllers/CategoryController.js";

const router = express.Router();

router.get("/categories", findAll);
router.get("/categories/:id", findOne);
router.post("/categories", create);
router.patch("/categories/:id", update);
router.delete("/categories/:id", destroy);

export default router;
