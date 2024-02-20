const express = require("express");
const {registerTeacher, loginTeacher, findTeacher, getTeachers} = require("../Controllers/teacherController");



const router = express.Router();

//get for test

// router.post("/register", (req, res) => {
//     res.send("Register");
// });

//create the route
 router.post("/register", registerTeacher);
 router.post("/login", loginTeacher);
 router.get("/find/:teacherId", findTeacher);
 router.get("/", getTeachers);


module.exports = router;