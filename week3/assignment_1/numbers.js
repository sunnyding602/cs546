var myNumericalOperations = {};
module.exports = myNumericalOperations;

myNumericalOperations.triangleArea = function(base, height){
	var area = base * height /2;
	return area;
}

myNumericalOperations.perimeterOfTriangle = function(side1, side2, side3){// Return the perimeter of the triangle given 3 sides
	var perimeter = side1 + side2 + side3;
	return perimeter;
}
myNumericalOperations.areaOfSquare= function(side){// Return the area of a square given the length of one side
	var area = side * side;
	return area;
}
myNumericalOperations.perimeterOfSquare= function(side){// Return the perimeter of a square given one square.
	var perimeter = side * 4;
	return perimeter;
}
myNumericalOperations.volumeOfCube= function(side){//} Return the area of a cube, given one side
	var volume = side * side * side;
	return volume;
}
myNumericalOperations.surfaceAreaOfCube= function(side){//} Return the surface area of a cube, given one side.
	var area = side * side * 6;
	return area;
}
myNumericalOperations.perimeterOfCube= function(side){//Return the permiter of a cube, given one side
	var permiter = side * 12;
	return permiter;
}
myNumericalOperations.circumferenceOfCircle= function(radius){//Return the circumference of a circle given a radius
	var circumference = Math.PI * (radius*2);
	return circumference;
}

myNumericalOperations.areaOfCircle= function(radius){
	var area = Math.PI * (radius * radius);
	return area;
}