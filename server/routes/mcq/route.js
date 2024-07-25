import { Router } from "express";
import * as Controller from "../../controller/mcq/api.controller.js";
const mcqRouter = Router();

// const corsOptions = {
//   origin: [
//     "https://prepaim.com",
//     "https://prepaim.in",
//     "http://localhost:3000",
//   ],
//   default: "https://prepaim.com",
//   // optionsSuccessStatus: 200,
// };

// app.use(cors(corsOptions));
mcqRouter.route("/postcomment").post(Controller.postComment);
mcqRouter
  .route("/postMcqQuestionMistakeReport")
  .post(Controller.postMcqQuestionMistakeReport);
mcqRouter.route("/getallquestions").get(Controller.getAllQuestions);
mcqRouter.route("/getallsubjects").get(Controller.getAllSubjects);
mcqRouter.route("/getallbranches").get(Controller.getAllBranches);
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
