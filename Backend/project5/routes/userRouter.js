const express = require('express');
const { getUsers, registerUser,login } = require('../controllers/userController');

const router = express.Router();

router.get('/', getUsers);
router.post('/register', registerUser);
router.post('/login', login)

module.exports = router;
