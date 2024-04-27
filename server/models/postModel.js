const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
    },
    category: {
      type: String,
      enum: [
        "education",
        "entertainment",
        "health",
        "science",
        "sports",
        "technology",
      ],
      default: "uncategorized",
    },
    like: {
      type: Number,
      default: 0,
    },
    comments: {
      type: [String],
      default: [],
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
