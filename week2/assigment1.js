var nextFridayTheThirteenth = function(){
    var myDate = new Date();
    myDate.setDate(13);

    while(1){
        if(myDate.getDay() == 4) break;
        if(myDate.getMonth() + 1 > 11){
            myDate.setMonth(0);
            myDate.setYear(myDate.getYear()+1);
        }
        myDate.setMonth(myDate.getMonth() + 1);
    }
    return myDate;
}

nextFridayTheThirteenth();
