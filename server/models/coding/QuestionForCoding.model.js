import mongoose from "mongoose";

const QuestionForCodingSchema = new mongoose.Schema({
  question: { type: String, unique: true },
  solutions: [
    {
      solution: String,
      language: String,
    },
    {
      solution: String,
      language: String,
    },
    {
      solution: String,
      language: String,
    },
    {
      solution: String,
      language: String,
    },
  ],
  date_added: { type: Date, default: Date.now },
  level: String,
});

export default mongoose.model("QuestionForCoding", QuestionForCodingSchema);
