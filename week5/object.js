var global_id = 0;
var people1 = {  name: 'sunny' }
var people2 = {  name: 'beizi' }


var map = {
  "put" : function( key, value){
    this.container[key] = value;
  },
  "get":function(key){
    return this.container[key];
  },
  "container":{}
};

var generateId = function(){
  return ++global_id;
};

map.put(generateId(), people1);
map.put(generateId(), people2);

console.log(map);
