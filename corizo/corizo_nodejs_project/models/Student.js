const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    roll_no:Number,
    name:String,
    Dept:String,
    College:String
})

module.export = mongoose.model('Student',studentSchema);