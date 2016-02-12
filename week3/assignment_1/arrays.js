var myArray = {};
module.exports = myArray;

myArray.shallowClone = function(baseArr){
		var copyArray = fruits.slice(0, baseArr.length);
		return copyArray;
	}
myArray.randomized = function(baseArr){
	var array = fruits.slice(0, baseArr.length);
	array.splice(array.length,1);

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

// var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
// console.log(myArray.randomized(fruits));



