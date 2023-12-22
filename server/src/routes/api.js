const express = require('express');

const taskRouter = require('./task.route');

const api = express();

api.use('/tasks',taskRouter);

module.exports=api;

