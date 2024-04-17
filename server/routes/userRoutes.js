const express = require("express");
const {
  userRegister,
  userLogin,
  getUser,
  uploadAvatar,
  updateUser,
} = require("../controllers/userController");
const { authMiddleware } = require("../middleware/authMiddleware");

const userRouter = express.Router();

userRouter.post("/user/register", userRegister);
userRouter.post("/user/login", userLogin);
userRouter.post("/user/avatar", authMiddleware, uploadAvatar);
userRouter.put("/user/update/:id", authMiddleware, updateUser);
userRouter.get("/user/:id", getUser);

module.exports = {
  userRouter,
};
