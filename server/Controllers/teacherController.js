const teacherModel = require("../Models/teacherModel");
const userModel = require("../Models/userModel");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
    const jwtkey = process.env.JWT_SECRET_KEY;

    return jwt.sign({_id}, jwtkey, {expiresIn: "3d" })
}


//functia va avea acces la trimitere si raspuns
const registerTeacher = async(req,res) =>{
    try
        {
        
        const {name, email, password} = req.body

        let teacher = await teacherModel.findOne({email});

        if(teacher) 
            return res.status(400).json("Teacher with the given email already exist...");

        if(!name || !email || !password) 
            return res.status(400).json("All fields are requierd...")

        if(!validator.isEmail(email)) 
            return res.status(400).json("Email must be a valid email...")

        if(!validator.isStrongPassword(password)) 
            return res.status(400).json("Password must be a valid password...")

            teacher = new teacherModel({name, email, password});

            const salt = await bcrypt.genSalt(10);
            teacher.password = await bcrypt.hash(teacher.password, salt);

            await teacher.save()

            const token = createToken(teacher._id)

            res.status(200).json({_id: teacher._id, name, email, token})
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }

};

const loginTeacher = async(req, res) => {
    const {email, password} = req.body;

    try{

        let teacher = await teacherModel.findOne({email});

        if(!teacher) return res.status(400).json("Invalid email...");

        const isValidPassword = await bcrypt.compare(password, teacher.password);

        if(!isValidPassword) return res.status(400).json("Invalid email or password...");

        const token = createToken(teacher._id)

        res.status(200).json({_id: teacher._id, name: teacher.name, email, token})
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
};

const findTeacher = async(req, res) => {
    const teacherId = req.params.teacherId;
    try {
        const teacher = await teacherModel.findById(teacherId);

        res.status(200).json(teacher);

    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
};

const getTeachers = async(req, res) => {
    try {
        const teachers  = await teacherModel.find();

        res.status(200).json(teachers);

    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
};

module.exports = { registerTeacher, loginTeacher, findTeacher, getTeachers };