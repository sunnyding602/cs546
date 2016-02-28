var ff = {}
ff.retirementAmountIfSavingPerMonth = function (amountSavingPerMonth,yearlyInterestRateOfInvestment,yearsUntilRetirement){
    var runningTotal=0;

    if (!amountSavingPerMonth || !yearlyInterestRateOfInvestment || !yearsUntilRetirement) {
        throw "error params";
    }
    if(amountSavingPerMonth<0){
        throw "amountSavingPerMonth cannot be less than 0";
    }
    else{
        for(var i=1;i<=yearsUntilRetirement*12;i++){
            runningTotal=(runningTotal+amountSavingPerMonth)*(1+yearlyInterestRateOfInvestment/12);
        }
        return runningTotal;
    }

}

ff.investedAmountAfterSomeYears = function (yearsInvesting, initialAmount, yearlyInterestRateOfInvestment){
    var runningTotal=0;
    if (!yearsInvesting || !initialAmount || !yearlyInterestRateOfInvestment) {
        throw "error params";
    }
    if(initialAmount<0||yearsInvesting<0||yearlyInterestRateOfInvestment<0)
        throw "error params";
    else{
        runningTotal=initialAmount;
        for(var i=0;i<yearsInvesting;i++){
            runningTotal=runningTotal*(1+yearlyInterestRateOfInvestment);
        }
        return runningTotal;
    }
}

ff.monthsToPayOffLoan = function (monthlyPaymentAmount, initialLoanAmount, yearlyInterestRateOfLoan){

    if (!monthlyPaymentAmount || !initialLoanAmount || !yearlyInterestRateOfLoan) {
        throw "error params";
    }
    var TotalMonth=0;
    var leftToPay=initialLoanAmount;
    while(leftToPay>0){
        leftToPay=leftToPay*(1+yearlyInterestRateOfLoan/12)-monthlyPaymentAmount;
        TotalMonth++;
    }
    return TotalMonth;
}


var exports = module.exports = {};
module.exports = ff;

// You can now add export properties to the exports object to be accessible from outside this file
