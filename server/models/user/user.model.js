import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  // username: { type: String, unique: true },
  email: { type: String, unique: true, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String },
  password: { type: String },
  user_profile_image: { type: String, default: "" },
});

export default mongoose.model("User", UserSchema);
