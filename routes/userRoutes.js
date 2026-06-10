import express from "express";
import { userController } from "../controllers/userController.js";

const router = express.Router();
const { createUser, getUser, getAllUsers, updateUser, deleteUser } = userController;

router.post("/create", createUser);
router.get("/", getAllUsers);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
