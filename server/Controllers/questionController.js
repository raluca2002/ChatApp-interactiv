
const Question = require('../Models/questionModel');
const questions = require('../database/data.js');
const {answers} = require('../database/data.js')

const getQuestions = async (req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createQuestion = async (req, res) => {

    try {
        Question.insertMany({ questions, answers }, function(err, data){
            res.json({ msg: "Data Saved Successfully...!"})
        })
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const dropQuestion = async(req, res) => {
    try{
        await Question.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!"});
    }catch (err) {
        res.status(400).json({message: err.message})
    }
}

module.exports = {
    getQuestions,
    createQuestion,
    dropQuestion
};
