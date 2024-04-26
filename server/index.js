const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { userRouter } = require("./routes/userRoutes");
const { connectDB } = require("./helper/database");
const { postRouter } = require("./routes/postRoutes");
const path = require("path");
const { categoryRouter } = require("./routes/categoryRoutes");

const app = express();
app.use(express.json());
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  optionSuccessStatus: 200,
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));

// Serve static files from the 'server/uploads' folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Connect db
connectDB();

//Routes
app.use("/api", userRouter);
app.use("/api", postRouter);
app.use("/api", categoryRouter);
