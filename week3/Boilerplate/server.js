// We first require our express package
var express = require('express');
var bodyParser = require('body-parser');
var myData = require('./data.js');

function succ(msg){
    return {status: "success", "result": msg  };
}


function err(msg){
    return {status: "error", "result": msg  };
}

// This package exports the function to create an express instance:
var app = express();

// This is called 'adding middleware', or things that will help parse your request
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Setup your routes here!
app.get("/api/perMonthRetirementSavings", function (request, response) {
      if (request.query.years && request.query.perMonth && request.query.interestRate) {
          var result = myData.retirementAmountIfSavingPerMonth(request.query.years, request.query.perMonth, request.query.interestRate );
          response.json(succ(result));
      } else {
          response.status(500).json(err('give me right paramter'));
      }
});


app.get("/api/loanPayoff", function (request, response) {
      if (request.query.monthlyAmount && request.query.loanAmount && request.query.interestRate) {
          var result = myData.monthsToPayOffLoan(request.query.monthlyAmount, request.query.loanAmount, request.query.interestRate );
          response.json(succ(result));
      } else {
          response.status(500).json(err('give me right paramter'));
      }
});


app.get("/api/investedAmount", function (request, response) {
      if (request.query.years && request.query.initial && request.query.interestRate) {
          var result = myData.investedAmountAfterSomeYears(request.query.years, request.query.initial, request.query.interestRate );
          response.json(succ(result));
      } else {
          response.status(500).json(err('give me right paramter'));
      }
});

// We can now navigate to localhost:3000
app.listen(3000, function () {
    console.log('Your server is now listening on port 3000! Navigate to http://localhost:3000 to access it');
});
