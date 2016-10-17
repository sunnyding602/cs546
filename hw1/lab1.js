"use strict";


//---------------------------- utility function start
function isNumeric(val) {
    return Number(parseFloat(val))==val;
}


//knuth shuffle this function is cited from http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

//---------------------------- utility function end


//---------------------------- homework start
let sumOfSquares =  (num1, num2, num3) => {
    if(!isNumeric(num1) || !isNumeric(num2) || !isNumeric(num3)){
        throw "The arguments of this function should all be numeric ";
    }
    return num1*num1+num2*num2+num3*num3;
}

console.log(sumOfSquares(5,3,10));

let sayHelloTo = (firstName, lastName, title) =>{
    if(!firstName && !lastName && !title){
        console.log('throws: None of the arguments are specified');
        //throw "None of the arguments are specified";
        return;
    }

    if(firstName && !lastName && !title){
        console.log(`Hello, ${firstName}!`);
        return;
    }

    if(firstName && lastName && !title){
        console.log(`Hello, ${firstName} ${lastName}. I hope you are having a good day!`);
        return;
    }


    if(firstName && lastName && title){
        console.log(`Hello, ${title} ${firstName} ${lastName}! Have a good evening!`);

        return;
    }

}
sayHelloTo(); // throws 
sayHelloTo("Phil"); // logs: Hello, Phil! 
sayHelloTo("Phil", "Barresi"); //logs: Hello, Phil Barresi. I hope you are having a good day!
sayHelloTo("Phil", "Barresi", "Mr."); // logs: Hello, Mr. Phil Barresi! Have a good evening!

let cupsOfCoffee = (howManyCups)=>{
    howManyCups = parseInt(howManyCups);
    
    for(; howManyCups >= 0 ; howManyCups--){
        if(howManyCups == 0 ){
            console.log('Pick it up, drink the cup, no more coffee left on the desk!');
            return;
        }else if(howManyCups == 1 ){
            console.log('1 cup of coffee on the desk! 1 cup of coffee!');
        }else{
            console.log(`${howManyCups} cups of coffee on the desk! ${howManyCups} cups of coffee!`);
        }


        if(howManyCups-1 == 0 ){
            console.log('Pick it up, drink the cup, no more coffee left on the desk!');
            return;
        }else if(howManyCups-1 == 1 ){
            console.log('1 cup of coffee on the desk! 1 cup of coffee!');
        }else{
            console.log(`Pick one up, drink the cup, ${howManyCups-1} cups of coffee on the desk!`); 
        }
        console.log();
    }
}

cupsOfCoffee(5);


let countOccurrencesOfSubstring = (fullString, substring) => {
    if(!fullString || !substring){
        throw "agrument error, this function takes two string arguments";
    }
    let cnt = 0;
    for (let i = 0; i < fullString.length; ++i) {
        if (fullString.substring(i, i + substring.length) == substring) {
            cnt++;
        }
    }
    console.log(cnt);
}

countOccurrencesOfSubstring("hello world", "o");
countOccurrencesOfSubstring("Helllllllo, class!", "ll");


let randomizeSentences = (paragraph) =>{
    if(!paragraph) throw "this function takes a string argument";
    let result = paragraph.match( /[^\.!\?]+[\.!\?]+/g );
    result = shuffle(result);
    return  result.join(' ').trim();
}

var paragraph = "Hello, world! I am a paragraph. You can tell that I am a paragraph because there are multiple sentences that are split up by punctuation marks. Grammar can be funny, so I will only put in paragraphs with periods, exclamation marks, and question marks -- no quotations.";
console.log(randomizeSentences(paragraph));
