const express = require('express')
const router = express.Router()
const employeeController = require("../controllers/employeeController")
const Employee = require("../Models/Employee")

router.post('/add-emp',employeeController.createEmployee)
router.get('/',employeeController.getAllEmployees)
module.exports = router