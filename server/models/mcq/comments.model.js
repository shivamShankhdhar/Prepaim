import mongoose from "mongoose";
const CommentSchema = new mongoose.Schema({
  user: { type: String, default: "anonymous" },
  question: { type: String, require: true },
  chapter: { type: String, require: true },
  subject: { type: String, require: true },
  comment: { type: String },
  isApproved: { type: Boolean, default: false },
  date_added: { type: Date, default: Date.now },
});

export default mongoose.model("Comment", CommentSchema);