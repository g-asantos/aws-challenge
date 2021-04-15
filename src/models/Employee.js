const mongoose = require('mongoose');
const EmployeeSchema = new mongoose.Schema({

  name: String,
  
  age: Number,

  role: String,

})
module.exports = mongoose.model('Employee', EmployeeSchema)