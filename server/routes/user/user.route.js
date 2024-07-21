import { Router } from "express";
import * as Controller from "../../controller/User/User.controller.js";
const userRouter = Router();
const corsOptions = {
  origin: [
    "https://prepaim.com",
    "https://prepaim.in",
    "http://localhost:3000",
  ],
  default: "https://prepaim.com",
  // optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

userRouter.route("/login").post(cors(corsOptions), Controller.Login);
userRouter.route("/register").post(cors(corsOptions), Controller.registerUser);

export default userRouter;
