const Results = require('../Models/resultModel.js');
// const questions = require('../database/data.js');
// const {answers} = require('../database/data.js')

/** get all result */
const getResult = async(req, res) => {
    try{
        const r = await Results.find();
        res.json(r)  
    } catch (err) {
        res.status(400).json({ message: err.message });
    }}

/** post all result */
const storeResult = async(req, res) => {
    try{
        const { username, result, attempts, points, achived } = req.body;
        if(!username && !result) throw new Error('Data Not Provided...!');

        Results.create({ username, result, attempts, points, achived }, function(err, data){
            res.json({ msg : "Result Saved Successfully...!"})
        })
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

/** delete all result */
const deleteResult = async(req, res) =>{
    try{
        await Results.deleteMany();
        res.json({ msg : "Result Deleted Successfully...!"})
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = {
    getResult,
    storeResult,
    deleteResult
}