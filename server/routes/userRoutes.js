const express = require("express");
const {
  userRegister,
  userLogin,
  getUser,
  uploadAvatar,
  updateUser,
} = require("../controllers/userController");
const { authMiddleware } = require("../middleware/authMiddleware");
const { upload } = require("../helper/multer");

const userRouter = express.Router();

userRouter.put(
  "/user/avatar/:id",
  authMiddleware,
  upload.single("avatar"),
  uploadAvatar
);

userRouter.post("/user/register", userRegister);
userRouter.post("/user/login", userLogin);

userRouter.patch("/user/update/:id", authMiddleware, updateUser);
userRouter.get("/user/:id", getUser);

module.exports = {
  userRouter,
};
