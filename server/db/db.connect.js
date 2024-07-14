import mongoose from "mongoose"

import dotenv from "dotenv"
dotenv.config();

const connectDB = async () => {
  try {
    const conn = new Promise(await mongoose.connect(process.env.MONGO_URI))
    if (conn) {
      return Promise.resolve(conn)
    }
    return Promise.reject("Database connection failed")
  } catch (error) {
    return {error: error.message}
  }
}

export default connectDB;