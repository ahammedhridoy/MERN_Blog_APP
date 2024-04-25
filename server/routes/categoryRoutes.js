const express = require("express");
const {
  getCategory,
  createCategory,
} = require("../controllers/categoryController");

const categoryRouter = express.Router();

categoryRouter.get("/post/category", getCategory);
categoryRouter.post("/post/category/create", createCategory);

module.exports = {
  categoryRouter,
};
