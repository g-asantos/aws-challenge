const express = require('express');

const employeesController = require('../controllers/employeesController');

const employeesRouter = express.Router();



employeesRouter.use('/employees', employeesController);

module.exports = employeesRouter;