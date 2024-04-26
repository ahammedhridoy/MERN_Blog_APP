const JWT = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const Authorization = req.headers.Authorization || req.headers.authorization;

  if (Authorization && Authorization.startsWith("Bearer")) {
    const token = Authorization.split(" ")[1];
    console.log("token", token);

    JWT.verify(token, process.env.JWT_SECRET, (err, user) => {
      console.log("err", err);
      console.log(user);
      if (err) {
        console.log(err);
        return res.sendStatus(403);
      }

      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

module.exports = {
  authMiddleware,
};
