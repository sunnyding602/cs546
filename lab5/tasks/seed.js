const dbConnection = require("../config/mongoConnection");
const data = require("../data/");
const comments = data.comments;
const recipes = data.recipes;

dbConnection().then(db => {
    return db.dropDatabase().then(() => {
        return dbConnection;
    }).then((db) => {
        return recipes.addRecipe("Fried Eggs", 
                                 [ { name: "Egg", amount: "2 eggs" }, { name: "Olive Oil", amount: "2 tbsp" } ],
								 [
								 "First, heat a non-stick pan on medium-high until hot",
								 "Add the oil to the pan and allow oil to warm; it is ready the oil immediately sizzles upon contact with a drop of water.",
								 "Crack the egg and place the egg and yolk in a small prep bowl; do not crack the yolk!",
								 "Gently pour the egg from the bowl onto the oil",    
								 "Wait for egg white to turn bubbly and completely opaque (approx 2 min)",
								 "Using a spatula, flip the egg onto its uncooked side until it is completely cooked (approx 2 min)",
								 "Remove from oil and plate",
								 "Repeat for second egg"
								 ]
                                 ); 
    }).then((addedRecipe) => {
		console.log(addedRecipe);
        const recipeId = addedRecipe._id;
        return comments
            .addComment(recipeId, "These eggs are delicious!", "Gordan Ramsay").then(console.log,console.error);
    }).then(() => {
        console.log("Done seeding database");
        db.close();
    });
}, (error) => {
    console.error(error);
});
