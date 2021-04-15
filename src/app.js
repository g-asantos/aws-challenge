const express = require('express');
const helmet = require('helmet');
const db = require('./lib/db');
const employeesRouter = require('../src/routes/employees.routes');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.use(helmet());


app.use('/api', employeesRouter)

module.exports = app;