
const constructorMethod = (app) => {

    app.use("*", (req, res) => {
        res.render("examples/home", {
            partial: "home-scripts"
        });
    })
};

module.exports = constructorMethod;
