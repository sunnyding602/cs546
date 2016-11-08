(function () {
    var computeResult = function(text, str, times, num){
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
    
    var staticForm = document.getElementById("static-form");

    if (staticForm) {
        // We can store references to our elements; it's better to 
        // store them once rather than re-query the DOM traversal each time
        // that the event runs.
        var textEle = document.getElementById("someText");
        var strEle = document.getElementById("insertedText");
        var timesEle = document.getElementById("numberOfTimes");
        var numEle = document.getElementById("numberOfChar");

        var errorContainer = document.getElementById("error-container");
        var errorTextElement = errorContainer.getElementsByClassName("text-goes-here")[0];

        var resultContainer = document.getElementById("result-container");
        var resultTextElement = resultContainer.getElementsByClassName("text-goes-here")[0];

        // We can take advantage of functional scoping; our event listener has access to its outer functional scope
        // This means that these variables are accessible in our callback
        staticForm.addEventListener("submit", function (event) {
            event.preventDefault();

            try {
                // hide containers by default
                errorContainer.classList.add("hidden");
                resultContainer.classList.add("hidden");
                
                var text = textEle.value;
                var str = strEle.value;
                var times = parseInt(timesEle.value);
                var num = parseInt(numEle.value);
         
                var result = computeResult(text, str, times, num);
                resultTextElement.textContent =  result;
                resultContainer.classList.remove("hidden");
            } catch (e) {
                var message = typeof e === "string" ? e : e.message;
                errorTextElement.textContent = e;
                errorContainer.classList.remove("hidden");
            }
        });
    }
})();