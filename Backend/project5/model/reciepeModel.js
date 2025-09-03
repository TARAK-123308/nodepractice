const mongoose = require('mongoose');

const userReciepe = new mongoose.Schema({
    name:{type:String, required: true},
    description:{type:String, required: true},
    ingredients:{type:Object},
    instructions:{type:String, required: true}
})

exports.Reciepe = mongoose.model("Reciepe",userReciepe)