import express from "express";
import {
  create,
  destroy,
  findAll,
  findOne,
  update,
} from "../controllers/DepartmentController.js";

const router = express.Router();

router.get("/departments", findAll);
router.get("/departments/:id", findOne);
router.post("/departments", create);
router.patch("/departments/:id", update);
router.delete("/departments/:id", destroy);

export default router;
