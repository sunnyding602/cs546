const userRoutes = require("./user");

const constructorMethod = (app) => {

    app.use("/users", userRoutes);
    
    app.use("/", (req, res) => {//home page, you can also call it index.html
        res.render("home", {
            partial: "home-scripts"
        });
    })

    app.use("*", (req, res) => {
        res.sendStatus(404);
    })

};

module.exports = constructorMethod;
