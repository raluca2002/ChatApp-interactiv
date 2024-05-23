
const express = require("express");
const router = express.Router();
const questionController = require('../Controllers/questionController');

// GET: Obține toate întrebările
router.get('/', questionController.getQuestions);

// POST: Adaugă o întrebare nouă
router.post('/', questionController.createQuestion);

router.delete('/', questionController.dropQuestion);
// router.post("/",(req,res) => {
//     res.send("Questions");
// })

// router.get('/',(req,res)=>{
//     res.send("questions api get request")
// })
module.exports = router;
