import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./db/db.connect.js";
import codingRouter from "./routes/coding/coding.route.js";
import adminMcqRouter from "./routes/admin/mcq/mcq.route.js";
import mcqRouter from "./routes/mcq/route.js";
import adminCodingRouter from "./routes/admin/coding/admin.coding.route.js";
import userRouter from "./routes/user/user.route.js";
import adminRouter from "./routes/admin/admin.route.js";
import multer from "multer";
import uploadController from "./controller/upload/upload.controller.js";
import multerUpload from "./controller/upload/multer.controller.js";

dotenv.config();
const app = express();

app.use(cors());

app.use(express.json());

const port = 4000;

app.get("/", (req, res) => {
  res.status(201).json("Home Get request");
});

// files upload logic

app.post("/upload", multerUpload().single("file"), uploadController);

// routes
// static files routes
app.use("/static", express.static("public/static"));

// api routes

app.use("/admin", adminRouter);
app.use("/admin/mcq", adminMcqRouter);
app.use("/admin/coding", adminCodingRouter);
app.use("/coding", codingRouter);
app.use("/mcq", mcqRouter);
app.use("/user", userRouter);

connectDB().then((data) => {
  console.log("Database Connected")
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })
}).catch((error) => {
  console.log(error)
})
