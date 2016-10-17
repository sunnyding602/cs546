const mongoCollections = require("./mongoCollections");
const uuid = require('node-uuid');
const todoItems = mongoCollections.todoItems;

let exportedMethods = {
   getTask(id) {
        if (!id) 
            return Promise.reject("You must provide an id to search for");
        
        return todoItems().then((todoItemsCollection) => {
            return todoItemsCollection.findOne({_id: id});
        });
    },

   getAllTasks(){
	   return todoItems().then((todoItemsCollection) => {
		   return todoItemsCollection.find({}).toArray();
	   });

   },

	createTask(title, description){
		if(!title) 
			return Promise.reject('You must provide a title for a task');

		if(!description) 
			return Promise.reject('You must provide a description for a task');
		return  todoItems().then((todoItemsCollection)=>{

			let task = {
				_id: uuid.v4(),
				title: title,
				description: description,
				completed: false,
				completedAt: null
			}; 
			return todoItemsCollection
				.insertOne(task)
				.then((newInsertInformation) => {
					return newInsertInformation.insertedId;
				}) .then((newId) => {
				return this.getTask(newId);
			});

		});
	},

	completeTask(taskId){
		if(!taskId)
			return Promise.reject('You must provide a taskId to complete');

        return todoItems().then((todoItemsCollection) => {

			let updatedTask = {
				completed: true,
				completedAt: new Date().toString() 
			}; 

            return todoItemsCollection.updateOne({
                _id: taskId
            },  { $set: updatedTask }).then(() => {
                return this.getTask(taskId);
            });
        });
	},

	removeTask(id){
        if (!id) 
            return Promise.reject("You must provide an id to search for");
        
        return todoItems().then((todoItemsCollection) => {
            return todoItemsCollection
                .removeOne({_id: id})
                .then((deletionInfo) => {
                    if (deletionInfo.deletedCount === 0) {
                        throw(`Could not delete task with id of ${id}`)
                    }
                });
        });

	}
}

module.exports = exports = exportedMethods;
