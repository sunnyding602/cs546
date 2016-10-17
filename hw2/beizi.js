const fd = require("./fileData.js");

fd.getFileAsJSON('./data.json').then((jsonData) => {
    let insertEvent = {
        'title':'yo',
        'location':'ha',
        'description':'heiheihei'
    }
    jsonData.events.push(insertEvent);
    return jsonData;
}).then((jsonData)=>{
    return fd.saveJSONToFile('./data.json', jsonData);
}).catch(
    (err) => {
        console.log(err);
    });




