import mongoose from "mongoose";
const QuestionSchema = new mongoose.Schema(
  {
    question: { type:String,require:true, unique: true},
    answer:[
      { ans: { type: String },isTrue: {type:Boolean} },
      { ans: { type: String },isTrue: {type:Boolean} },
      { ans: { type: String },isTrue: {type:Boolean} },
      { ans: { type: String }, isTrue: { type: Boolean } }, 
    ],
    subject: String,
    chapter: String,
    explanation: [{ explanation: { type: String } }],
    level: { type: String, default: "a" },
    date_added: { type: Date, default: Date.now },
  },
  
);

export default mongoose.model("Question", QuestionSchema);