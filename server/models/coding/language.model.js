import mongoose from "mongoose";

const LanguageSchema = new mongoose.Schema({
  name: String,
});

export default mongoose.model("Language", LanguageSchema);
