import { Router } from "express";
import * as Controller from "../../controller/User/User.controller.js";
const userRouter = Router();
userRouter.route("/login/:username/:password").get(Controller.Login);
export default userRouter;
