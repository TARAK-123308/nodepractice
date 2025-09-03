const express = require("express");
const router = express.Router();
const { addReciepe ,getReciepe, updateReciepe} = require("../controllers/receipeController");

router.post("/reciepe", addReciepe);
router.get('/get',getReciepe)
router.put('/update/byId/:id',updateReciepe)

module.exports = router;
