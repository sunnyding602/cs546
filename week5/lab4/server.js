// We first require our express package
var express = require('express');
var bodyParser = require('body-parser');
var myData = require('./data.js');

function succ(msg, operationTitle){
    return {status: "success", operationTitle: operationTitle, "result": msg  };
}


function err(msg){
    return {status: "error", "result": msg  };
}

// This package exports the function to create an express instance:
var app = express();
app.set('view engine', 'ejs');

// This is called 'adding middleware', or things that will help parse your request
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded



app.get("/",function (request, response) {
    response.render('pages/index');
});
// apis start
app.get("/api/perMonthRetirementSavings", function (request, response) {
    try{
        var result = myData.retirementAmountIfSavingPerMonth(request.query.years, request.query.perMonth, request.query.interestRate );
        response.json(succ(result));
    }catch(errmsg){
        response.status(500).json(err(errmsg));
    }
});


app.get("/api/loanPayoff", function (request, response) {
    try{
        var result = myData.monthsToPayOffLoan(request.query.monthlyAmount, request.query.loanAmount, request.query.interestRate );
        response.json(succ(result));
    }catch(errmsg){
        response.status(500).json(err(errmsg));
    }
});


app.get("/api/investedAmount", function (request, response) {
    try{
        var result = myData.investedAmountAfterSomeYears(request.query.years, request.query.initial, request.query.interestRate );
        response.json(succ(result));
    }catch(errormsg){
        response.status(500).json(err(errormsg));
    }
});
// apis end

//pages start
app.post("/results/perMonthRetirementSavings", function (request, response) {
    try{
        var result = myData.retirementAmountIfSavingPerMonth(request.body.years, request.body.perMonth, request.body.interestRate );
        response.render('pages/results', succ(result, 'perMonthRetirementSavings'));
    }catch(errmsg){
        response.render('pages/error', err(errmsg));
    }
});


app.post("/results/loanPayoff", function (request, response) {
    try{
        var result = myData.monthsToPayOffLoan(request.body.monthlyAmount, request.body.loanAmount, request.body.interestRate );
        response.render('pages/results', succ(result, 'loanPayoff'));
    }catch(errmsg){
        response.render('pages/error', err(errmsg));
    }
});


app.post("/results/investedAmount", function (request, response) {
    try{
        var result = myData.investedAmountAfterSomeYears(request.body.years, request.body.initial, request.body.interestRate );
        response.render('pages/results', succ(result, 'investedAmount'));
    }catch(errmsg){
        response.render('pages/error', err(errmsg));
    }
});
//pages end

// We can now navigate to localhost:3000
app.listen(3000, function () {
    console.log('Your server is now listening on port 3000! Navigate to http://localhost:3000 to access it');
});
