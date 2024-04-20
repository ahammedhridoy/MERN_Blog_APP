const express = require("express");
const {
  createPost,
  uploadThumbnail,
  getAllPosts,
  getSinglePost,
  getCategoryPost,
  getAuthorPost,
  editPost,
  deletePost,
} = require("../controllers/postController");
const { authMiddleware } = require("../middleware/authMiddleware");

const postRouter = express.Router();

postRouter.post("/post/create", authMiddleware, createPost);
postRouter.post("/post/thumbnail", authMiddleware, uploadThumbnail);
postRouter.get("/post/all", getAllPosts);
postRouter.get("/post/single/:id", getSinglePost);
postRouter.get("/post/author/:id", getAuthorPost);
postRouter.get("/post/category/:category", getCategoryPost);
postRouter.put("/post/edit/:id", authMiddleware, editPost);
postRouter.delete("/post/delete/:id", authMiddleware, deletePost);

module.exports = {
  postRouter,
};
