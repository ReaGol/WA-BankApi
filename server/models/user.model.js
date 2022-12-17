import {Schema, model} from "mongoose";

const userSchema = new Schema({
  firstName: { type: String, unique: true, required: true },
  lastName: { type: String, unique: true, required: true },
  cash: { type: Number, required: true },
  credit: { type: Number, required: true }
});

export const User = model("users", userSchema)