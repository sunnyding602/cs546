const mongoCollections = require("../config/mongoCollections");
const comments = mongoCollections.comments;
const uuid = require('node-uuid');

let exportedMethods = {
    getCommentsByRecipeId(recipeId) {
        return comments().then((commentCollection) => {
            return commentCollection
                .find({recipeId:recipeId})
                .toArray();
        });
    },
    getCommentById(id) {
        return comments().then((commentCollection) => {
            return commentCollection
                .findOne({_id: id})
                .then((comment) => {
                    if (!comment) 
                        throw "Comment not found";
                    return comment;
                });
        });
    },
    addComment(recipeId, comment, poster) {
        if (typeof recipeId !== "string") 
            return Promise.reject("No recipeId provided");

        if (typeof comment !== "string") 
            return Promise.reject("No comment provided");

        if (typeof poster !== "string") 
            return Promise.reject("No poster provided");
        
        return comments().then((commentCollection) => {

                    let newComment = {
                        recipeId: recipeId,
                        comment: comment,
                        poster: poster,
                        _id: uuid.v4()
                    };

                    return commentCollection
                        .insertOne(newComment)
                        .then((newInsertInformation) => {
                            return newInsertInformation.insertedId;
                        })
                        .then((newId) => {
                            return this.getCommentById(newId);
                        });
		});
    },
    removeComment(id) {
        return comments().then((commentCollection) => {
            return commentCollection
                .removeOne({_id: id})
                .then((deletionInfo) => {
                    if (deletionInfo.deletedCount === 0) {
                        throw(`Could not delete comment with id of ${id}`)
                    } else {
                        return true;
                    }
                });
        });
    },
    removeCommentByRecipeId(recipeId) {//when recipe is deleted, the related comments shall also be deleted
        return comments().then((commentCollection) => {
            return commentCollection
                .removeOne({recipeId: recipeId})
                .then((deletionInfo) => {
                    if (deletionInfo.deletedCount === 0) {
                        throw(`Could not delete comment with id of ${id}`)
                    } else {
                        //succ
                    }
                });
        });
    },
    updateComment(id, updatedComment) {
        return comments().then((commentCollection) => {
            let updatedCommentData = {};

            if (updatedComment.comment) {
                updatedCommentData.comment = updatedComment.comment;
            }

            if (updatedComment.poster) {
                updatedCommentData.poster = updatedComment.poster;
            }


            let updateCommand = {
                $set: updatedCommentData
            };

            return commentCollection.updateOne({
                _id: id
            }, updateCommand).then((result) => {
                return this.getCommentById(id);
            });
        });
    }
}

module.exports = exportedMethods;
