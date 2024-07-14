import { Router } from "express";
import * as Controller from "../../controller/coding/coding.controller.js";
const codingRouter = Router();

codingRouter
  .route("/getQuestionsFromCodingByQuestionName/:questionName")
  .get(Controller.getQuestionsFromCodingByQuestionName);

codingRouter
  .route("/getAllLanguagesFromCoding")
  .get(Controller.getAllLanguages);
export default codingRouter;
