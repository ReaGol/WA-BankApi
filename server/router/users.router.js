import { Router } from "express";
import { createUser, deleteUser, editUser, getUsers } from "../controllers/user.controller";
export const userRouter = Router();

userRouter.get("/", getUsers);

userRouter.post("/", createUser); 

userRouter.put("/:id", editUser);

userRouter.delete("/:id", deleteUser);
