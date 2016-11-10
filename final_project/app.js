const express = require("express");
const fs = require('fs');
const bodyParser = require("body-parser");
//{key:fs.readFileSync('.ssl/runxiflute.key'), cert: fs.readFileSync('.ssl/runxiflute.crt') }
const https = require('https');
const app = express();
const static = express.static(__dirname + '/public');
const configRoutes = require("./routes");

const exphbs = require('express-handlebars');

const Handlebars = require('handlebars');

const handlebarsInstance = exphbs.create({
    defaultLayout: 'main',
    // Specify helpers which are only registered on this instance.
    helpers: {
        asJSON: (obj, spacing) => {
            if (typeof spacing === "number")
                return new Handlebars.SafeString(JSON.stringify(obj, null, spacing));

            return new Handlebars.SafeString(JSON.stringify(obj));
        }
    },
    partialsDir: [
        'views/partials/'
    ]
});

const rewriteUnsupportedBrowserMethods = (req, res, next) => {
    // If the user posts to the server with a property called _method, rewrite the request's method
    // To be that method; so if they post _method=PUT you can now allow browsers to POST to a route that gets
    // rewritten in this middleware to a PUT route
    if (req.body && req.body._method) {
        req.method = req.body._method;
        delete req.body._method;
    }

    // let the next middleware run:
    next();
};

app.use("/public", static);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(rewriteUnsupportedBrowserMethods);

app.engine('handlebars', handlebarsInstance.engine);
app.set('view engine', 'handlebars');

configRoutes(app);

https.createServer({key:fs.readFileSync('.ssl/runxiflute.key'), cert: fs.readFileSync('.ssl/runxiflute.crt') }, app).listen(3000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on https://localhost:3000");
});
