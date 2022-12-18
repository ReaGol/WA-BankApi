import express from "express";
import './db/mongoose.js'
import { userRouter } from "./router/users.router.js";
import { errorHandler } from "./middleware/error.middleware.js";
import cors from "cors"

const PORT = 8000;
const app = express();
app.use(cors())
app.use(express.json());
app.use("/users", userRouter);
app.use(errorHandler)

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
