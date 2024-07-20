import { Router } from "express";
import * as Controller from "../../controller/mcq/api.controller.js";
const mcqRouter = Router();

mcqRouter.route("/postcomment").post(Controller.postComment);
mcqRouter.route("/getallquestions").get(Controller.getAllQuestions);
mcqRouter.route("/getAllSubjects").get(Controller.getAllSubjects);
// get routes
mcqRouter
  .route("/getSubjectsbyBranchAndSubject/:branch")
  .get(Controller.getSubjectsByBranch);
mcqRouter
  .route("/getallchaptersbysubject/:subject")
  .get(Controller.getAllChaptersBySubject);
mcqRouter
  .route("/getallquestionsbysubjectandchapter/:subject/:chapter")
  .get(Controller.getQuestionsBySubjectAndChapter); // get all comments
mcqRouter
  .route("/getcommentbyquestion/:question")
  .get(Controller.getCommentByQuestion); //get comment by question

export default mcqRouter;
