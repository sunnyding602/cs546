Array.prototype.shuffle = function(){
    var last=this.length, tmp, randomIdx;

    while(--last){
        randomIdx = Math.floor( Math.random()*(last+1));
        tmp = this[last];
        this[last] = this[randomIdx];
        this[randomIdx] =  tmp;
    }
    return this;
}

var arr = [1,2,3,4,5,6,7,8,9,0];

arr.shuffle();
console.log(arr);
