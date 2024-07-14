import mongoose from 'mongoose'

const ChapterSchema = new mongoose.Schema({
  name: { type: String, required: true,unique:true},
  subject: { type: String, required: true, },
});

export default mongoose.model("Chapter", ChapterSchema);