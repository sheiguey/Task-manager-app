const express = require('express');

const taskRouter = express.Router();

const {httpAddNewTask,httpGetAllTasks,httpDeleteTask,httpUpdateTask,httpGetOneTask}=require('../controllers/task.controllers');

taskRouter.get('/',httpGetAllTasks);
taskRouter.get('/:id',httpGetOneTask);
taskRouter.post('/new',httpAddNewTask);
taskRouter.delete('/delete/:id',httpDeleteTask);
taskRouter.post('/update',httpUpdateTask);

module.exports= taskRouter;