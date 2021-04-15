const express = require('express');

const employee = require('../models/Employee');

const employeesController = express.Router();

employeesController
  .post('/', async (req, res, next) => {

    const { name, age, role} = req.body;

    if(!name || !age || !role){
      return res.status(400).json({
        message: "One of the parameters is missing"
      })
    }

    try {
      const newEmployee = await employee.create({name, age, role});
      return res.status(200).send(newEmployee)
    }catch(err){
      return res.status(500).json({
        status: 'error',
        message: `Internal Server Error - ${err.message}`
      })
    }

    
    
  })

employeesController
  .put('/:id', async (req, res, next) => {

    const { name, age, role} = req.body;

    if(!name || !age || !role){
      return res.status(400).json({
        message: "One of the parameters is missing"
      })
    }

    try{
      const existingEmployee = await employee.findByIdAndUpdate(req.params.id, { $set: req.body }, { $upsert: true, new: true })
      return res.status(200).send(existingEmployee);
    }catch(err){
      return res.status(500).json({
        status: 'error',
        message: `Internal Server Error - ${err.message}`
      })
    }

    
  })

employeesController
  .get('/', async (req, res, next) => {
    try{
      const employees = await employee.find()
      res.status(200).send(employees)
    }catch(err){
      return res.status(500).json({
        status: 'error',
        message: `Internal Server Error - ${err.message}`
      })
    }

  })

employeesController
  .get('/:id', async (req, res, next) => {

    try{
      const existingEmployee = await employee.findById(req.params.id)

      return res.status(200).send(existingEmployee)
    }catch(err){
      return res.status(500).json({
        status: 'error',
        message: `Internal Server Error - ${err.message}`
      })
    }
    
  })

employeesController
  .delete('/:id', async (req, res, next) => {

    try{
      await employee.deleteOne({ _id: req.params.id })
      return res.status(200).send();
    }catch(err){
      return res.status(500).json({
        status: 'error',
        message: `Internal Server Error - ${err.message}`
      })
    }
    
  })

module.exports = employeesController;
