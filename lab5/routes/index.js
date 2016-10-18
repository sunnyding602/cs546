const commentRoutes = require("./comments");
const recipeRoutes = require("./recipes");

const constructorMethod = (app) => {
    app.use("/comments", commentRoutes);
    app.use("/recipes", recipeRoutes);

    app.use("*", (req, res) => {
        res.sendStatus(404);
    })
};

module.exports = constructorMethod;
