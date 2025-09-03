const Employee = require('../Models/Employee')

const createEmployee = async(req,res)=>{
    try{
        const {name, email, phone, city} = req.body
        const employee = new Employee({
            name,
            email,
            phone,
            city
        })
        await employee.save()
        res.status(201).json(employee)
    } catch(error){
        console.log("there is an error", error)
        res.status(500).json({message: 'Server error'})
    }
}

const getAllEmployees = async(req,res)=>{
    try{
        const employees = await Employee.find()
        res.json(employees)
    }catch{
        console.log("There is an error:",error)
        res.status(500).json({message: 'Server error'})
    }
}

module.exports = {createEmployee, getAllEmployees}