const express = require('express');
const { Home, About, User,Homie,getUsers,getUserByID,registerUser,deleteUser} = require('../controller/userController');

const router = express.Router();

router.get('/', Home);
router.get('/about', About);
router.get('/user', User);
router.post('/',Homie)
router.get('/users', getUsers);
router.get('/users/:id',getUserByID)
router.post('/register',registerUser);
router.delete('/del/:id',deleteUser);
module.exports = router;
