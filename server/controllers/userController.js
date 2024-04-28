const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const path = require("path");

// User Registration
const userRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      res.status(400).json({ message: "Please fill all the fields" });
    }
    const existUser = await userModel.findOne({ email, username });
    if (existUser) {
      res.status(400).json({ message: "User already exists" });
    }
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const newUser = await new userModel({
      username,
      email,
      password: hashedPassword,
      avatar: "",
    }).save();
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error.message);
  }
};

// User Login
const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }
    const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "25d",
    });

    // Exclude password field from user object
    const { password: userPassword, ...userDataWithoutPassword } =
      user.toObject();

    res.status(200).json({
      message: "Login successful",
      user: userDataWithoutPassword,
      token,
    });
  } catch (error) {
    console.log(error);
  }
};

// Get user
const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findById(id); // Pass id directly
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User Found", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" }); // Add error response
  }
};

// Upload Avatar
const uploadAvatar = async (req, res, next) => {
  try {
    const filename = req?.file.filename;
    const fileUrl = path.join(filename);
    const { id } = req.params;
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const updatedUser = await userModel.findByIdAndUpdate(
      id,
      { avatar: fileUrl },
      { new: true }
    );
    res
      .status(200)
      .json({ message: "Avatar uploaded successfully", user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update user
const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { username, email, currentPassword, newPassword, confirmPassword } =
      req.body;

    // Check if required fields are present
    if (
      !username ||
      !email ||
      !currentPassword ||
      !newPassword ||
      !confirmPassword
    ) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    // Check if email already exists for another user
    const existEmail = await userModel.findOne({ email, _id: { $ne: id } });
    if (existEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Retrieve user by ID
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Validate current password
    const validatePassword = bcrypt.compareSync(currentPassword, user.password);
    if (!validatePassword) {
      return res.status(401).json({ message: "Current password is incorrect" });
    }

    // Check if new password matches confirm password
    if (newPassword !== confirmPassword) {
      return res.status(401).json({ message: "Passwords do not match" });
    }

    // Hash the new password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(newPassword, salt);

    // Update user with new data
    const updatedUser = await userModel.findByIdAndUpdate(
      id,
      { username, email, password: hashedPassword },
      { new: true }
    );

    // Send response with updated user data
    res.status(200).json({ message: "User updated", updatedUser });
  } catch (error) {
    // Handle any internal server errors
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  userRegister,
  userLogin,
  getUser,
  uploadAvatar,
  updateUser,
};
