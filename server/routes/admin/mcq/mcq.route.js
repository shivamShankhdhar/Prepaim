import { Router } from "express";
import * as Controller from "../../../controller/admin/mcq/admin.mcq.controller.js";
import Auth from "../../../middleware/auth.js";
const adminMcqRouter = Router();

// post requests
adminMcqRouter.route("/postquestion").post(Controller.postQuestions);
adminMcqRouter.route("/postchapter").post(Auth, Controller.postChapter);
adminMcqRouter.route("/postbranch").post(Auth, Controller.postBranch);

// get routes
adminMcqRouter.route("/getallquestions").get(Controller.getQuestions);

adminMcqRouter.route("/getallchapters").get(Controller.getChapters);

adminMcqRouter.route("/getallcomments").get(Controller.getAllComments); // get all comments
//get comment by question
adminMcqRouter.route("/getallbranches").get(Controller.getAllBranches);

// update routes
adminMcqRouter
  .route("/update-question/:id")
  .put(Auth, Controller.updateQuestion);
adminMcqRouter
  .route("/update-comment-approval/:id")
  .put(Controller.updateCommentApprovalByCommentId);

// delete routes
adminMcqRouter.route("/delete-question/:id").delete(Controller.deleteQuestion);
adminMcqRouter
  .route("/delete-comment/:id")
  .delete(Controller.deleteCommentById);

export default adminMcqRouter;
