const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    questions: { type: Array, default: [] },
    answers: { type: Array, default: [] },
    createdAt: {type: Date, default:Date.now},
}
);

const questionModel = mongoose.model('Question', questionSchema);

module.exports = questionModel;
