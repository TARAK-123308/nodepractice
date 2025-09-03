const express = require('express');
const { getUsers, registerUser,login } = require('../controllers/userController');
const authorization = require("../middlewares/authValidation")

const router = express.Router();

router.get('/',authorization, getUsers);
router.post('/register', registerUser);
router.post('/login', login)

module.exports = router;
