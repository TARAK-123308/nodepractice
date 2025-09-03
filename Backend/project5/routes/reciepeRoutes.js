const express = require("express");
const router = express.Router();
const { addReciepe ,getReciepe, updateReciepe} = require("../controllers/receipeController");
const authValidation = require('../middlewares/authValidation');

router.post("/reciepe",authValidation, addReciepe);
router.get('/get',getReciepe)
router.put('/update/byId/:id',updateReciepe)

module.exports = router;
