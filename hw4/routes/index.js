const classRoutes = require("./classes");
const educationRoutes = require("./education");
const hobbyRoutes = require("./hobbies");

const constructorMethod = (app) => {
    app.use("/classes", classRoutes);
    app.use("/education", educationRoutes);
    app.use("/hobbies", hobbyRoutes);

    app.use("*", (req, res) => {
        res.status(404).json({error: "Not found"});
    });
};

module.exports = constructorMethod;
