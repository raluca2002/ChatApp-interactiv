const userModel = require("../Models/userModel");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
    const jwtkey = process.env.JWT_SECRET_KEY;

    return jwt.sign({_id}, jwtkey, {expiresIn: "3d" })
}

//functia va avea acces la trimitere si raspuns
const registerUser = async(req,res) =>{
    try
        {
        
        const {name, email, password} = req.body

        let user = await userModel.findOne({email});

        if(user) 
            return res.status(400).json("User with the given email already exist...");

        if(!name || !email || !password) 
            return res.status(400).json("All fields are requierd...")

        if(!validator.isEmail(email)) 
            return res.status(400).json("Email must be a valid email...")

        if(!validator.isStrongPassword(password)) 
            return res.status(400).json("Password must be a valid password...")

            user = new userModel({name, email, password});

            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);

            await user.save()

            const token = createToken(user._id)

            res.status(200).json({_id: user._id, name, email, token})
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }

};

const loginUser = async(req, res) => {
    const {email, password} = req.body;

    try{

        let user = await userModel.findOne({email});

        if(!user) return res.status(400).json("Invalid email...");

        const isValidPassword = await bcrypt.compare(password, user.password);

        if(!isValidPassword) return res.status(400).json("Invalid email or password...");

        const token = createToken(user._id)

        res.status(200).json({_id: user._id, name: user.name, email, token})
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
};

const findUser = async(req, res) => {
    const userId = req.params.userId;
    try {
        const user = await userModel.findById(userId);

        res.status(200).json(user);

    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
};

const getUser = async(req, res) => {
    try {
        const users  = await userModel.find();

        res.status(200).json(users);

    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
};

const setAvatar = async (req, res) => {
    try {
        const userId = req.params.userId;
        const avatarImage = req.body.image;

        const avatars = await userModel.findByIdAndUpdate(userId, { isAvatarImageSet: true,
                                                        avatarImage}, { new: true });

        return res.json({
        isSet: avatars.isAvatarImageSet,
        image: avatars.avatarImage,
        });                                                
        
    } catch(error){
        console.log(error);
        res.status(500).json(error);
    }
}

//const userModel = require("../Models/userModel");

// // Șterge toate documentele din colecția "users"
// userModel.remove({}, (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Toate documentele au fost șterse cu succes.");
//     }
// });

module.exports = {registerUser, loginUser, findUser, getUser, setAvatar};