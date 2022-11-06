const express = require("express");

const userProfileController = require("../controllers/messages");

const router = express.Router();

// Get /message/messages
router.get("/messages", userProfileController.getMessages);

module.exports = router;
