const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { userRouter } = require("./routes/userRoutes");
const { connectDB } = require("./helper/database");

const app = express();
app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Connect db
connectDB();

//Routes
app.use("/api", userRouter);
