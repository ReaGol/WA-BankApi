import express from "express";
import './db/mongoose.js'
import { userRouter } from "./router/users.router.js";

const PORT = 8000;
const app = express();

app.use(express.json());
app.use("/", userRouter);

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
