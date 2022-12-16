import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {type: String, require: true}

})

export const User = mongoose.model("users", userSchema)