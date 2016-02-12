var myDates = {};
module.exports = myDates;

myDates.daysUntil = function(someDate){
	var CurrentDate = new Date();
	var TYear=CurrentDate.getFullYear();
	console.log("Tyear:"+TYear);
    someDate.getFullYear(TYear);
    console.log("someDate:"+someDate);
    var DayCount=Math.abs((someDate-CurrentDate)/(1000*60*60*24));
    DayCount=Math.round(DayCount); 
    return(DayCount-1);
}

myDates.daysLeftInYear = function(){
	var CurrentDate = new Date();
	var Year=CurrentDate.getFullYear();
    var TDay=new Date(Year,11,31);
    TDay.getFullYear(Year);
    var DayCount=Math.abs((TDay-CurrentDate)/(1000*60*60*24));
    DayCount=Math.round(DayCount); 
    return(DayCount+1);
}

myDates.daysSince = function(someDate){
	var CurrentDate = new Date();
	var TYear=CurrentDate.getFullYear();
	console.log("Tyear:"+TYear);
    someDate.getFullYear(TYear);
    console.log("someDate:"+someDate);
    var DayCount=Math.abs((someDate-CurrentDate)/(1000*60*60*24));
    DayCount=Math.round(DayCount); 
    return(DayCount-1);
}

myDates.nextFridayTheThirteenth = function(){
    var startDate = new Date();
    startDate.setDate(13);

    while(1){
        if(startDate.getDay() == 4) break;
        if(startDate.getMonth()+1 > 11){
            startDate.setMonth(0);
            startDate.setYear(startDate.getYear()+1);
        }
        startDate.setMonth(startDate.getMonth() + 1);
    }
    return startDate;
}

var someDate = new Date("January, 22, 2016");
console.log(myDates.nextFridayTheThirteenth());