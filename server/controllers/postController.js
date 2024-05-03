const { upload } = require("../helper/multer");
const postModel = require("../models/postModel");
const userModel = require("../models/userModel");
const path = require("path");

// Create Post
const createPost = async (req, res, next) => {
  try {
    const { title, description, category } = req.body;
    const filename = req?.file.filename;
    const fileUrl = path.join(filename);

    if (!title || !description || !category) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }
    const existPost = await postModel.findOne({ title });
    if (existPost) {
      return res.status(400).json({ message: "Post already exists" });
    }
    const newPost = await new postModel({
      title,
      description,
      category: category || "uncategorized",
      thumbnail: fileUrl,
      author: req.user.id,
    }).save();
    await userModel.findByIdAndUpdate(
      req.user.id,
      { $push: { posts: newPost._id } },
      { new: true }
    );

    res.status(200).json({ message: "post created", newPost });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Thumbnail upload
const uploadThumbnail = async (req, res, next) => {
  try {
    upload.single("thumbnail")(req, res, async (err) => {
      if (err) {
        return res
          .status(400)
          .json({ message: "Error uploading file", error: err.message });
      }
    });
    res.status(200).json({ message: "File uploaded successfully" });
  } catch (error) {
    console.error("Error uploading file:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get All Posts

const getAllPosts = async (req, res) => {
  try {
    const posts = await postModel
      .find({})
      .sort({ createdAt: -1 })
      .populate([
        { path: "author", model: "User" },
        { path: "comments.userId", model: "User" },
      ]);

    if (!posts || posts.length === 0) {
      return res.status(404).json({ message: "No posts found" });
    }

    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get Single Post

const getSinglePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await postModel.findById(id).populate([
      { path: "author", model: "User" },
      { path: "comments.userId", model: "User" },
    ]);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get Post By Category

const getCategoryPost = async (req, res) => {
  try {
    const { category } = req.params;
    const posts = await postModel
      .find({ category })
      .sort({ updatedAt: -1 })
      .populate("author");
    if (posts.length === 0) {
      return res
        .status(404)
        .json({ message: "No posts found for this category" });
    }
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching category posts:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get Author Post

const getAuthorPost = async (req, res) => {
  try {
    const { id } = req.params;
    const posts = await postModel.find({ author: id }).sort({ uploadedAt: -1 });
    if (!posts || posts.length === 0) {
      return res
        .status(404)
        .json({ message: "Posts not found for this author" });
    }
    res.status(200).json({ message: "Posts found", posts });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Edit Post

const editPost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, category } = req.body;
    console.log(title, description, category, id);

    let fileUrl = "";
    if (req.file) {
      const filename = req.file.filename;
      fileUrl = `${filename}`;
    }

    const post = await postModel.findById(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (post.author.toString() !== req.user.id) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const updateData = {};
    if (title) updateData.title = title;
    if (description) updateData.description = description;
    if (category) updateData.category = category;
    if (fileUrl) updateData.thumbnail = fileUrl;

    const updatedPost = await postModel.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    res.status(200).json({ message: "Post updated successfully", updatedPost });
  } catch (error) {
    console.error("Error editing post:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete Post

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const authorId = req.user.id;
    console.log(authorId);

    // Find the post by ID
    const post = await postModel.findById(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    // Check if the user is authorized to delete the post
    if (post?.author.toString() !== authorId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // If authorized, delete the post
    await postModel.findByIdAndDelete(id);

    // Remove the post ID from the user's posts array
    await userModel.findByIdAndUpdate(authorId, { $pull: { posts: id } });
    res.status(200).json({ message: "Post deleted successfully", post });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Like a post
const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const post = await postModel.findById(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const alreadyLiked = post.likes.includes(userId);

    if (alreadyLiked) {
      post.likes.pull(userId);
    } else {
      post.likes.push(userId);
    }

    await post.save();

    const message = alreadyLiked
      ? "Post unliked successfully"
      : "Post liked successfully";

    res.status(200).json({ message, post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Add a comment to a post
const addComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { comment } = req.body;
    const userId = req.user.id;

    const post = await postModel.findById(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Push the new comment with userId to the comments array
    post.comments.push({ text: comment, userId });
    await post.save();

    res.status(200).json({ message: "Comment added successfully", post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Comment could not added" });
  }
};

// Delete a comment
const deleteComment = async (req, res) => {
  try {
    const { postId, commentId } = req.params;
    const userId = req.user.id;

    // Find the post containing the comment
    const post = await postModel.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Find the index of the comment to delete
    const commentIndex = post.comments.findIndex(
      (comment) =>
        comment._id.toString() === commentId &&
        comment.userId.toString() === userId
    );
    if (commentIndex === -1) {
      return res.status(404).json({ message: "Comment not found" });
    }

    // Remove the comment from the comments array
    post.comments.splice(commentIndex, 1);

    // Save the updated post
    await post.save();

    res.status(200).json({ message: "Comment deleted successfully", post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  createPost,
  uploadThumbnail,
  getAllPosts,
  getSinglePost,
  getCategoryPost,
  getAuthorPost,
  editPost,
  deletePost,
  likePost,
  addComment,
  deleteComment,
};
