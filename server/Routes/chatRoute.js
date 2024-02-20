const express = require("express");
const {createChat, findUserChats, findChat} = require("../Controllers/chatcontroller")
const router = express.Router();

router.post("/", createChat);
router.get("/:userId", findUserChats);
router.get("/find/:firstId/:secondId", findChat);

module.exports = router;
