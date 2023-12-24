const taskData = require('./task.mongo')

async function updateTask(task) {
    const newUpdatedTask = {
        ...task,
        updated_at:new Date(),
    }
    try {
        await taskData.findOneAndUpdate({
            id: +newUpdatedTask.id
        }, newUpdatedTask, {
            upsert: true
        })
    } catch (err) {
        console.error(`we could not update the task something went wrong ${err}`)
    }
}

async function getAllTask(){
    try{
      return await taskData.find({},{'_id':0,'__v':0})
    }catch(err){
        console.error(`we could not get the tasks something went wrong ${err}`)
    }
    
}

async function saveTask(task){
    const tasks =await getAllTask();
    const tasksLength = tasks.length;
    const lastTask=tasks[tasksLength-1]
    const id =lastTask.id + 1
     
    const newTask={
        ...task,
        id:id,
        created_at:new Date(),
    }
    try {
        await taskData.findOneAndUpdate({
            id: newTask.id
        },newTask, {
            upsert: true
        })
    } catch (err) {
        console.error(`we could not save the task something went wrong ${err}`)
    }
}


async function getOneTask(id){
    try {
       const task= await taskData.findOne({id:id},{'_id':0,'__v':0});
       return task;
    } catch (err) {
        console.error(`we could not get the task with the id ${id} something went wrong ${err}`)
    }
}


async function deleteTask(id){
    try{
     await taskData.deleteOne({id:id})
    }catch(err){
        console.error(`we could not delete the task something went wrong ${err}`)
    }
}


module.exports={saveTask,getAllTask,updateTask,getOneTask,deleteTask}