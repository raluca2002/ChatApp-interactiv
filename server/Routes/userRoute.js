const express = require("express");
const {registerUser, loginUser, findUser, getUser, setAvatar} = require("../Controllers/userController");



const router = express.Router();

//get for test

//create the route
router.post("/register", registerUser);
router.post("/setavatar/:userId", setAvatar);
router.post("/login", loginUser);
router.get("/find/:userId", findUser);
router.get("/", getUser);


module.exports = router;