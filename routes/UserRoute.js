import express from "express";

import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  LoginUser,
  RegisterUser,
  getUserByUserType,
} from "../controllers/UserController.js";

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/usertype/:usertype", getUserByUserType);
router.get("/users/:id", getUserById);
router.post("/users", createUser);
router.post("/users/login", LoginUser);
router.post("/users/register", RegisterUser);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
