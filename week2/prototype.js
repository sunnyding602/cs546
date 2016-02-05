var Car = function(color, sound){
    this.color = color;
    this.sound = sound;
}

Car.prototype.honk = function(){
    alert("this car goes " + this.sound);
}
Car.prototype.doors = 2;

var honda = new Car("black", "meep");

var ford = new Car('white', 'beep');
ford.doors = 4;

console.log(honda.doors);
console.log(ford.doors)
