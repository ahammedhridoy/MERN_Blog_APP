const JWT = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    try {
      const decoded = JWT.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (err) {
      res.status(401).json({ message: err.message });
    }
  } else {
    res.status(401).json({ message: "No token provided" });
  }
};

module.exports = {
  authMiddleware,
};
