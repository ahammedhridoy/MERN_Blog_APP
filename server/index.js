const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { userRouter } = require("./routes/userRoutes");
const { connectDB } = require("./helper/database");
const { postRouter } = require("./routes/postRoutes");
const path = require("path");
const { categoryRouter } = require("./routes/categoryRoutes");
const bodyParse = require("body-parser");
const { subscribeToNewsletter } = require("./helper/mailchimpAPI");

const app = express();
app.use(express.json());
const corsOptions = {
  origin: ["http://localhost:5173"],
  credentials: true,
  optionSuccessStatus: 200,
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));
app.use(bodyParse.urlencoded({ extended: true }));

// Serve static files from the 'server/uploads' folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const port = process.env.PORT || 3000;

// Subscribe to newsletter
app.post("/subscribe", async (req, res) => {
  const { email } = req.body;
  try {
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }
    const result = await subscribeToNewsletter(email);
    res.status(200).json({ message: "Subscription successful", result });
  } catch (error) {
    console.error("Error subscribing:", error);
    res
      .status(500)
      .json({ message: "Subscription failed", error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Connect db
connectDB();

//Routes
app.use("/api", userRouter);
app.use("/api", postRouter);
app.use("/api", categoryRouter);
