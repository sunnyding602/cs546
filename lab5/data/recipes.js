const mongoCollections = require("../config/mongoCollections");
const recipes = mongoCollections.recipes;
const uuid = require('node-uuid');
const commentData = require('./comments');

let exportedMethods = {
    getAllRecipes() {
        return recipes().then((recipeCollection) => {
            return recipeCollection
                .find({})
                .toArray();
        });
    },
    getRecipeById(id) {
        return recipes().then((recipeCollection) => {
            return recipeCollection
                .findOne({_id: id})
                .then((recipe) => {
                    if (!recipe) 
                        throw "Recipe not found";
                    return recipe;
                });
        }).catch(err=>{
            console.error(err);
            throw err;
        });
    },
    addRecipe(title, ingredients, steps) {
        if (typeof title !== "string") 
            return Promise.reject("No title provided");

        if (!Array.isArray(ingredients)) {
            ingredients = [];
        }

        if (!Array.isArray(steps)) {
            steps = [];
        }
        
        return recipes().then((recipeCollection) => {

                    let newRecipe = {
                        title: title,
                        ingredients: ingredients,
                        steps: steps,
                        comments: [],
                        _id: uuid.v4()
                    };

                    return recipeCollection
                        .insertOne(newRecipe)
                        .then((newInsertInformation) => {
                            return newInsertInformation.insertedId;
                        })
                        .then((newId) => {
                            return this.getRecipeById(newId);
                        });
		});
    },
    removeRecipe(id) {
        return recipes().then((recipeCollection) => {
            return recipeCollection
                .removeOne({_id: id})
                .then((deletionInfo) => {
                    if (deletionInfo.deletedCount === 0) {
                        throw(`Could not delete recipe with id of ${id}`)
                    } else {
                        return true;
                    }
                });
        });
    },
    updateRecipe(id, updatedRecipe) {
        return recipes().then((recipeCollection) => {
            let updatedRecipeData = {};

            if (updatedRecipe.title) {
                updatedRecipeData.title = updatedRecipe.title;
            }

            if (updatedRecipe.ingredients) {
                updatedRecipeData.ingredients = updatedRecipe.ingredients;
            }

            if (updatedRecipe.body) {
                updatedRecipeData.steps = updatedRecipe.steps;
            }

            let updateCommand = {
                $set: updatedRecipeData
            };

            return recipeCollection.updateOne({
                _id: id
            }, updateCommand).then((result) => {
                return this.getRecipeById(id);
            });
        });
    },
    getDetailedRecipeById(id){
        return this.getRecipeById(id).then(recipe=>{
            return recipe;
        }).then((recipe)=>{
            return commentData.getCommentsByRecipeId(id).then(comments=>{
                recipe.comments = comments;
                return recipe;
            });
        }).catch(err=>{
            console.log(err);
            throw err;
        });
    }
}

module.exports = exportedMethods;

