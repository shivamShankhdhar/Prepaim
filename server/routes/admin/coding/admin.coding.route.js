import { Router } from "express";
const adminCodingRouter = Router();
import * as Controller from "../../../controller/admin/coding/admin.coding.controller.js";
import Auth from "../../../middleware/auth.js";
// post requests
adminCodingRouter
  .route("/checkCodingQuestionAvailability/:questionName")
  .get(Controller.checkCodingQuestionAvailability);
adminCodingRouter
  .route("/postquestionforcoding")
  .post(Auth, Controller.postQuestionForCoding);
adminCodingRouter.route("/addLanguage").post(Controller.addLanguage);
adminCodingRouter
  .route("/getAllQuestionsFromCoding")
  .get(Controller.getAllQuestionsFromCoding);
adminCodingRouter
  .route("/getCodingQuestionById/:id")
  .get(Controller.getCodingQuestionById);

adminCodingRouter.route("/addCodingLanguage").post(Controller.addLanguage);

adminCodingRouter
  .route("/deleteCodingQuestionById/:id")
  .delete(Controller.deleteCodingQuestionById);

export default adminCodingRouter;
