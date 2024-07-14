import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: { type: String },
  isAdmin: { type: Boolean, default: false },
});

export default mongoose.model("User", UserSchema);
