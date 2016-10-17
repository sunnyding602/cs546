const todo = require("./todo");

let taskIds = {};
//1. Create a task with the following details:
todo.createTask("Ponder Dinosaurs", "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?")
    .then((task1) =>{
        taskIds.firstTaskId =  task1._id;
        console.log("=======task1======");
        console.log(task1);
    }).catch(err=>{
        console.log(err);
    }).then(()=>{
//2. Log the task, and then create a new task with the following details:
        return todo.createTask("Play Pokemon with Twitch TV", "Should we revive Helix?")
                   .then((task2)=>{
                       taskIds.secondTaskId = task2._id;
                       console.log("=======task2======");
                       console.log(task2);
                   });

    }).catch(err=>{
        console.log(err);
    }).then(()=>{
//3. After the task is inserted, query all tasks and log them
        return todo.getAllTasks().then((allTasks=>{
            console.log("=======allTasks======");
            console.log(allTasks);
        }));

    }).catch(err=>{
        console.log(err);
    }).then(()=>{

//4. After all the tasks are logged, remove the first task
        console.log(`=======remove the first task. id: ${taskIds.firstTaskId}======`);
        return todo.removeTask(taskIds.firstTaskId); 
    }).catch(err=>{
        console.log(err);
    }).then(()=>{
        return todo.getAllTasks().then((allTasks=>{
//5. Query all tasks and log them
            console.log("=======allTasks======");
            console.log(allTasks);
        }));
    }).catch(err=>{
        console.log(err);
    }).then(()=>{
//6. Complete the remaining task
        console.log(`=======complete the second task. id: ${taskIds.secondTaskId}======`);
        return todo.completeTask(taskIds.secondTaskId);
    }).catch(err=>{
        console.log(err);
    }).then(()=>{
//7. Query and log the remaining task.
        return todo.getAllTasks().then((allTasks=>{
            console.log("=======allTasks======");
            console.log(allTasks);
        }));
    }).catch(err=>{
        console.log(err);
    });









