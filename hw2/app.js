const fd = require("./fileData.js");
const tm = require("./textMetrics.js");
["./chapter1.txt", "./chapter2.txt", "./chapter3.txt"].forEach((path) => {

    fd.getFileAsString(path).then((data) => {
        console.log(tm.createMetrics(data));
    }).catch(
        (err) => {
            console.log(err);
        });
});




//********the following commented lines are test for functions in fileData.js
//fd.getFileAsJSON("./myjsondata").then((data)=>{
//    console.log(data);
//}).catch(
//    (err)=>{
//    console.log(err);
//});

//fd.saveStringToFile('./textFile', 'fjdsklfjdsklfsdjlk').then( (isSaved)=>{
//    if(isSaved) console.log('file saved');
//}).catch((err) => {
//    console.log(err);
//});



//fd.saveJSONToFile('./jsonFile', {"a": 1}).then( (isSaved)=>{
//    if(isSaved) console.log('file saved');
//}).catch((err) => {
//    console.log(err);
//});

