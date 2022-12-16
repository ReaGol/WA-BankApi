import { Router } from "express";
import { User } from "../models/user.model.js";
export const userRouter = Router();

userRouter.get("/", async (req, res) => {
  const users = await User.find({});
  res.send(users);
});

userRouter.post("/", async (res, req) => {
    const user = await User.create(req.body)
  res.send("post");
});
