var rp = require('request-promise');



console.log(rp);

rp('http://runxiflute.com/schedule/beizi.html')
.then(function (htmlString) {
    console.log(htmlString);
    return "papapa";
}).then(function (msg){
    console.log(msg);//papapap
    return [1,2,3,4,5,6];
}).then(function( arr){
    console.log(arr);
}).catch(function (err) {
    // Crawling failed...
});
