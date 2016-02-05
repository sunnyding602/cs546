function retirementAmountIfSavingPerMonth(yearsUntilRetirement, amountSavingPerMonth, yearlyInterestRateofInvestment){
    var monthTotal = yearsUntilRetirement*12;
    var runningTotal = 0;
    for(var i = 1; i<=monthTotal; i++){
        runningTotal = (runningTotal + amountSavingPerMonth) * (1+ yearlyInterestRateofInvestment/12);
    }
    return  runningTotal;
}

function investedAfterYears(yearsInvesting, initialAmount, yearlyInterestRateOfInvestment){
    
    var runningTotal = initialAmount;
    for(var i = 1; i<=yearsInvesting; i++){
        runningTotal = runningTotal*(1+yearlyInterestRateOfInvestment);  
    }

    return runningTotal;
}

function amountNeededToPayOffLoanInMonths(yearsDesired, loanAmount, yearlyInterestRateOfLoan){
    var runningTotal = loanAmount; 
    for(var i = 1; i<=yearsDesired; i++){
        runningTotal = runningTotal*(1+yearlyInterestRateOfLoan);
    }
    
    return runningTotal/(yearsDesired*12);
}

//12.809328043328943
console.log(retirementAmountIfSavingPerMonth(1, 1, 0.12));
//1104.6221254112045
console.log(investedAfterYears(10, 1000, 0.01));
// 9.205184378426704
console.log(amountNeededToPayOffLoanInMonths(10, 1000, 0.01));
