const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
    name: {type: String, require: true, minlength: 3, maxlength: 30},
    email: {type: String, require: true, minlength: 3, maxlength: 200, unique: true},
    password: {type: String, require: true, minlength: 3, maxlength: 1024}
},{
    timestamps: true,//ora&data cand un anumit user a fost creat
}
);

const teacherModel = mongoose.model("Teacher", teacherSchema)

module.exports = teacherModel;