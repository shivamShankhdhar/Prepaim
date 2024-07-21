import { Router } from "express";
import * as Controller from "../../controller/coding/coding.controller.js";
const codingRouter = Router();
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
codingRouter
  .route("/getQuestionsFromCodingByQuestionName/:questionName")
  .get(cors(corsOptions), Controller.getQuestionsFromCodingByQuestionName);

codingRouter
  .route("/getAllLanguagesFromCoding")
  .get(cors(corsOptions), Controller.getAllLanguages);
export default codingRouter;
