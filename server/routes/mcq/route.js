import { Router } from "express";
import * as Controller from "../../controller/mcq/api.controller.js";
const adminMcqRouter = Router();

adminMcqRouter.route("/postcomment").post(Controller.postComment);
// get routes
adminMcqRouter
  .route("/getsubjectsbybranch/:branch")
  .get(Controller.getSubjectsByBranch);
adminMcqRouter
  .route("/getallchaptersbysubject/:subject")
  .get(Controller.getAllChaptersBySubject);
adminMcqRouter
  .route("/getallquestionsbysubjectandchapter/:subject/:chapter")
  .get(Controller.getQuestionsBySubjectAndChapter); // get all comments
adminMcqRouter
  .route("/getcommentbyquestion/:question")
  .get(Controller.getCommentByQuestion); //get comment by question

export default adminMcqRouter;
