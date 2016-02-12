var myObj = {};
module.exports = myObj;

myObj.shallowClone = function(baseObject){
	var ret = {};
	ret.first = baseObject.first;
	ret.mySubObject = baseObject.second;
	return ret;
}

myObj.deepClone = function(baseObject){
	var ret = {};
	ret.first = baseObject.first;
	ret.mySecond = {};
	ret.mySubObject.second = baseObject.mySubObject.second;
	return ret;
}

var tempObject = {
    first: "first",
    mySubObject: { 
      second: "second"
    }
  };