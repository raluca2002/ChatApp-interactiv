const mongoose = require('mongoose');


const resultSchema =  new mongoose.Schema({
    username: { type: String},
    result: {type: Array, default: []},
    attempts: {type: Number, default: 0},
    points: { type: Number, default: 0},
    achived: {type: String, default:''},
    createdAt: {type: Date, default: Date.now}
})

// Adăugare de indice unic pe combinația de câmpuri
resultSchema.index({ username: 1, result: 1, attempts: 1, points: 1, achived: 1 }, { unique: true });

// default mongoose.model('result', resultSchema);
const resultModel = mongoose.model('result', resultSchema);

module.exports = resultModel;
