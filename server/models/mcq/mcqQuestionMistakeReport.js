import mongoose from "mongoose";

const McqQuestionMistakeReportSchema = new mongoose.Schema({
  question_id: { type: String },
  user_id: { type: String, default: "" },
  reason: { type: String },
  date_added: { type: Date, default: Date.now },
});

export default mongoose.model(
  "McqQuestionMistakeReport",
  McqQuestionMistakeReportSchema
);
