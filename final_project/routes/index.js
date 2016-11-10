const userRoutes = require("./user");
const path = require('path');
const constructorMethod = (app) => {

    app.use("/users", userRoutes);
    
    app.get("/", (req, res) => {//home page, you can also call it index.html
        // res.render("home", {//get gps crood example
        //     partial: "home-scripts"
        // });

        res.sendFile(path.resolve(__dirname, '../views/video.html'));
    })

    app.use("*", (req, res) => {
        res.sendStatus(404);
    })

};

module.exports = constructorMethod;
