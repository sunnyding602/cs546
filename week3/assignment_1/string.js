
var myString = {};
module.exports = myString;

myString.occurrencesOfSubstring = function(main, substr){
	var subSen = new RegExp(substr, 'gi');;
	var countSen = (main.match(subSen) || []).length;
	return countSen;
}

myString.occurrencesOfSubstringInsensivie = function(main, substr){
	var subIns = new RegExp(substr, 'g');;
	var countIns = (main.match(subIns) || []).length;
	return countIns;
}

myString.randomizeSentences = function(paragraph){
	var array=paragraph.split(".");
	array.splice(array.length-1,1);

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


var string="hi all, this is derp. thank you all to answer my query.";

console.log(myString.randomizeSentences(string));