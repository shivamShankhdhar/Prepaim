import { Router } from "express";
import * as Controller from "../../controller/mcq/api.controller.js";
const mcqRouter = Router();

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
mcqRouter.route("/postcomment").post(cors(corsOptions), Controller.postComment);
mcqRouter
  .route("/getallquestions")
  .get(cors(corsOptions), Controller.getAllQuestions);
mcqRouter
  .route("/getallsubjects")
  .get(cors(corsOptions), Controller.getAllSubjects);
mcqRouter
  .route("/getallbranches")
  .get(cors(corsOptions), Controller.getAllBranches);
// get routes
mcqRouter
  .route("/getSubjectsbyBranchAndSubject/:branch")
  .get(cors(corsOptions),Controller.getSubjectsByBranch);
mcqRouter
  .route("/getallchaptersbysubject/:subject")
  .get(cors(corsOptions),Controller.getAllChaptersBySubject);
mcqRouter
  .route("/getallquestionsbysubjectandchapter/:subject/:chapter")
  .get(cors(corsOptions),Controller.getQuestionsBySubjectAndChapter); // get all comments
mcqRouter
  .route("/getcommentbyquestion/:question")
  .get(cors(corsOptions),Controller.getCommentByQuestion); //get comment by question

export default mcqRouter;
