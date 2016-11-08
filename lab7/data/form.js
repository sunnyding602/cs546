let exportedMethods = {
    computeResult(text, str, times, num) {
        if(!text) throw "Must provide some text";
        if(!str) throw "Must provide a string to inesrt";
        if(isNaN(times)){
            throw "times(third input) should be a number";
        }

        if(times < 1 || times>25){
            throw "times(third input) should between [1-25]";
        }

        if(isNaN(num)){
            throw "num(forth input) should be a number";
        }
        if(num < 1 || num>25){
            throw "num(forth input) should between [1-25]";
        }

        var result = '';
        for(var i=0; i<text.length; i++){
            result += text[i];
            if((i+1)%num == 0 && times>0){//insert the string
                times--;
                result += str;
            }
        }
        return result;
    }
}

module.exports = exportedMethods;