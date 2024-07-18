import { Router } from "express";
import {
  checkSubjectAvailability,
  getSubjects,
  postSubject,
} from "../../controller/admin/admin.controller.js";
import Auth from "../../middleware/auth.js";
const adminRouter = Router();

adminRouter.route("/postsubject").post(Auth, postSubject);
adminRouter
  .route("/checkSubjectAvailability/:name")
  .get(checkSubjectAvailability);
adminRouter.route("/getallsubjects").get(getSubjects);

export default adminRouter;
