import { Router } from "express";
import * as Controller from "../../controller/User/User.controller.js";
const userRouter = Router();

userRouter.route("/login").post(Controller.Login);
userRouter.route("/register").post(Controller.registerUser);

export default userRouter;
