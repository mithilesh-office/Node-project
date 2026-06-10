import express from "express";
import { userController } from "../controllers/userController.js";
import validateBody from "../middlewares/validateBody.js";
import { createUserSchema, updateUserSchema } from "../zodSchema/zodSchema.js";

const router = express.Router();
const { createUser, getUser, getAllUsers, updateUser, deleteUser } = userController;

router.post("/create", validateBody(createUserSchema), createUser);
router.get("/", getAllUsers);
router.get("/:id", getUser);
router.put("/:id", validateBody(updateUserSchema), updateUser);
router.delete("/:id", deleteUser);

export default router;
