const {getAllTask,saveTask,updateTask,deleteTask, getOneTask} = require('../models/task.model')

async function httpGetAllTasks(req,res){
    const tasks = await getAllTask();
    return res.status(200).json(tasks)
}

async function httpAddNewTask(req,res){
    const task = req.body;
    if(!task.title || !task.description){
        return res.status(400).json({
            error:'Missing require task property'
        })
    }

    saveTask(task);
    return res.status(201).json({
        ok:true
    });
}

async function httpDeleteTask(req, res) {
    const taskId = +req.params.id;
    await deleteTask(taskId);
    return res.status(200).json({
        ok: true
    });
   
}


async function httpUpdateTask(req,res){
    const task = req.body
    if(!task.title || !task.description){
        return res.status(400).json({
            error:'Missing require task property'
        })
    }
    updateTask(task);
    return res.status(201).json({
        ok:true
    });
}

async function httpGetOneTask(req,res){
    const taskId = +req.params.id;
    const task = await getOneTask(taskId);
    return res.status(200).json(task)
}

module.exports = {httpAddNewTask,httpGetAllTasks,httpDeleteTask,httpUpdateTask,httpGetOneTask}