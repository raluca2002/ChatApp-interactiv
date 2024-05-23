const express = require("express");
const router = express.Router();
const resultController = require('../Controllers/resultController');


router.route('/')
        .get(resultController.getResult)
        .post(resultController.storeResult)
        .delete(resultController.deleteResult)

module.exports = router;
