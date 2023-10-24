const taskmanagment = require('./db')


async function getALLtasks(req,res){

       const tasks = await taskmanagment.find({})
       res.status(200).json(tasks)

}

async function createTasks(req,res){
         
    const task = await taskmanagment.insertMany(req.body)
    res.status(200).json(task)
    
}

async function getOnetask(req,res){
    const id = req.params.id
    const task = await taskmanagment.findOne({_id:id})
    
    if(task){
        res.status(200).json(task)
    }
     
    else{
        res.send(`task not found at this id ${id} number`)
    }
}


async function deleteOnetask(req,res){
    const id =  await req.params.id
    const task = await taskmanagment.findOneAndDelete({_id:id})
    
    if(task){

        res.status(200).json('task delete successfuly')
    }
     
    else{
        res.send(`task not found at this id ${id} number`)
    }
}


async function updateOnetask(req,res){
    const id =  await req.params.id
    const data = await req.body
    const task = await taskmanagment.findOneAndUpdate({_id:id},data)
    
    if(task){

        res.status(200).json(task)
    }
     
    else{
        res.send(`task not found at this id ${id} number`)
    }
}


module.exports = {
    getALLtasks,
    createTasks,
    getOnetask,
    updateOnetask,
    deleteOnetask
}