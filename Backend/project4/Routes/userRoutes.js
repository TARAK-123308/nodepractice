const express = require('express');

const router = express.Router();

const { getUsers, postUser, updateUser, deleteUser, login, userByEmail } = require('../controllers/userController');

router.get('/', getUsers);

router.post('/register', postUser);

router.post('/updateUser', updateUser);

router.get('/deleteUser/:email', deleteUser);

router.post('/login', login);

router.get('/getUser/:email', userByEmail);

module.exports = router;