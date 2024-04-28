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
        "Travel",
        "Food & Cooking",
        "Health & Wellness",
        "Fashion & Style",
        "Fitness & Exercise",
        "Technology",
        "Personal Finance",
        "Home & Decor",
        "Education & Learning",
        "Sports & Media",
      ],
      default: "Uncategorized",
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    comments: [
      {
        text: String,
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
