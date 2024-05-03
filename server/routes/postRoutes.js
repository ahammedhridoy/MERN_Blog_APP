const express = require("express");
const {
  createPost,
  getAllPosts,
  getSinglePost,
  getCategoryPost,
  getAuthorPost,
  editPost,
  deletePost,
  uploadThumbnail,
  likePost,
  addComment,
  deleteComment,
} = require("../controllers/postController");
const { authMiddleware } = require("../middleware/authMiddleware");
const { upload } = require("../helper/multer");

const postRouter = express.Router();

postRouter.post(
  "/post/create",
  authMiddleware,
  upload.single("thumbnail"),
  createPost
);

postRouter.get("/post/all", getAllPosts);
postRouter.get("/post/single/:id", getSinglePost);
postRouter.get("/post/author/:id", getAuthorPost);
postRouter.get("/post/category/:category", getCategoryPost);
postRouter.patch("/post/edit/:id", authMiddleware, editPost);
postRouter.delete("/post/delete/:id", authMiddleware, deletePost);
postRouter.patch("/post/like/:id", authMiddleware, likePost);
postRouter.patch("/post/comment/:id", authMiddleware, addComment);
postRouter.delete(
  "/post/:postId/comment/:commentId",
  authMiddleware,
  deleteComment
);

module.exports = {
  postRouter,
};
