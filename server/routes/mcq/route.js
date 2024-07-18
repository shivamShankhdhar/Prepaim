import { Router } from "express";
import * as Controller from "../../controller/mcq/api.controller.js";
const McqRouter = Router();

McqRouter.route("/postcomment").post(Controller.postComment);
// get routes
McqRouter.route("/getSubjectsbyBranchAndSubject/:branch/:subject").get(
  Controller.getSubjectsByBranchAndSubject
);
McqRouter.route("/getallchaptersbysubject/:subject").get(
  Controller.getAllChaptersBySubject
);
McqRouter.route("/getallquestionsbysubjectandchapter/:subject/:chapter").get(
  Controller.getQuestionsBySubjectAndChapter
); // get all comments
McqRouter.route("/getcommentbyquestion/:question").get(
  Controller.getCommentByQuestion
); //get comment by question

export default McqRouter;
