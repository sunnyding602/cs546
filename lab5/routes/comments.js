const express = require('express');
const router = express.Router();
const data = require("../data");
const recipeData = data.recipes;
const commentData = data.comments;

router.get("/recipe/:recipeId", (req, res) => {
    let recipeId = req.params.recipeId;
    commentData.getCommentsByRecipeId(recipeId).then((comments) => {

        recipeData.getRecipeById(recipeId).then(recipe=>{
            console.log(recipe);
            for(let i in comments){
                comments[i].recipeTitle = recipe.title;
            }
            res.json(comments);
        });
    }).catch((err) => {
        console.error(err);
        res.status(404).json({ error: "Comment not found" });
    });
});


router.get("/:commentId", (req, res) => {
    let commentId = req.params.commentId;
    commentData.getCommentById(commentId).then((comment) => {

        recipeData.getRecipeById(comment.recipeId).then(recipe=>{
            comment.recipeTitle = recipe.title;
            res.json(comment);
        });
    }).catch((err) => {
        console.error(err);
        res.status(404).json({ error: "Comment not found" });
    });
});

router.post("/:recipeId", (req, res) => {
    let recipeId = req.params.recipeId;
    let comment = req.body;
    commentData.addComment(recipeId, comment.comment, comment.poster).then((comment) => {
        res.json(comment);
    }).catch((err) => {
        console.error(err);
        res.status(404).json({ error: err });
    });
});

//why do I need recipeId to update.. a comment?
router.put("/:recipeId/:commentId", (req, res) => {
    let commentId = req.params.commentId;
    let updatedComment = req.body;
    commentData.updateComment(commentId, updatedComment).then((comment) => {
        res.json(comment);
    }).catch((err) => {
        console.error(err);
        res.status(404).json({ error: err });
    });
});


router.delete("/:commentId", (req, res) => {
    let commentId = req.params.commentId;
    commentData.removeComment(commentId).then((isDeleted) => {
        res.json({isDeleted:isDeleted});
    }).catch((err) => {
        console.error(err);
        res.status(404).json({ error: err });
    });
});

module.exports = router;
