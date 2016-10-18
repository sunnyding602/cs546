const express = require('express');
const router = express.Router();
const data = require("../data");
const recipeData = data.recipes;
const commentData = data.comments;

router.get("/", (req, res) => {
    recipeData.getAllRecipes().then((recipes) => {
        ret = [];
        recipes.forEach((recipe)=>{
            ret.push({_id: recipe._id, title:recipe.title});
        });
        res.json(ret);
    }).catch(() => {
        res.status(404).json({ error: "No Recipe for the moment"});

    });
});

router.get("/:recipeId", (req, res) => {
    let recipeId = req.params.recipeId;
    recipeData.getDetailedRecipeById(recipeId).then((recipe) => {
        res.json(recipe);
    }).catch(() => {
        res.status(404).json({ error: "Recipe not found" });

    });
});

router.post("/", (req, res) => {
    let myRecipeData = req.body;

    recipeData.addRecipe(myRecipeData.title, myRecipeData.ingredients, myRecipeData.steps).then((recipe) => {
        res.json(recipe);
    }).catch((err) => {
        res.status(500).json({ error: err});

    });
});


router.put("/:id", (req, res) => {
    let updatedRecipeData = req.body;
    let recipeId = req.params.id;

    recipeData.updateRecipe(recipeId, updatedRecipeData).then((newRecipe) => {
        res.json(newRecipe);
    }).catch((err) => {
        res.status(500).json({ error: err});

    });
});
router.delete("/:id", (req, res) => {
    let recipeId = req.params.id;

    recipeData.removeRecipe(recipeId).then((isDeleted) => {
        res.json({deleted: isDeleted});
    }).catch((err) => {
        res.status(500).json({ error: err});

    });
});


module.exports = router;
