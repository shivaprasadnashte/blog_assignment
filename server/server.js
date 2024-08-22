import express from "express";
import dotenv from "dotenv";
import connectDB from "./utills/db.js";
import authRouter from "./routes/user.route.js";
import postRouter from "./routes/post,route.js";
import commentRouter from "./routes/comments.route.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
connectDB();
const PORT = process.env.PORT || 5000;


app.use("/api/users",authRouter);
app.use("/api/posts",postRouter);
app.use("/api/comments",commentRouter);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
