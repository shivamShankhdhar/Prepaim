import mongoose from "mongoose";

const SubjectSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  type: { type: String, required: true },
  branch: { type: String, required: true },
  image: { type: String },
});

export default mongoose.model("Subject", SubjectSchema);
