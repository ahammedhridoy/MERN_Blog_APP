const express = require("express");
const { contact } = require("../controllers/contact");

const contactRouter = express.Router();

contactRouter.post("/contact", contact);

module.exports = {
  contactRouter,
};
