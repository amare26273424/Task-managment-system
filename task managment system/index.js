const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const taskmanagment = require('./configuration/db')
const  {
    getALLtasks,
    createTasks,
    getOnetask,
    updateOnetask,
    deleteOnetask
}   = require('./configuration/tasks')
  

// middlleware
      
      app.use(bodyParser.urlencoded({ extended: false }));
      app.use(bodyParser.json());

      app.use(express.static('public'))
     

      // routes

app.get('/tasks',getALLtasks)
app.get('/tasks/:id',getOnetask)
app.post('/tasks',createTasks)
app.patch('/tasks/:id',updateOnetask)
app.delete('/tasks/:id',deleteOnetask)






app.listen(5000, () =>
console.log(`Server is listening on port 5000...`)
);