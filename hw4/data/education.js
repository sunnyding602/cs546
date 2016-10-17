let attendedSchools = {
    "highschool": {name:"Sunshine Middle School","location":"XI'AN, Shannxi Prov."}, 
    "undergrad": {name: "Nanchang University", "location":"Nanchang, Jiangxi Prov."}, 
    "grad": {name:"Stevens Institute of Technology", "location": "Hoboken, New Jersey"}
};

let exportedMethods = {
    getAllAttendedSchools(){
        schoolNames = [];
        for(let key in attendedSchools){
            schoolNames.push(attendedSchools[key].name);
        }
        return schoolNames;
    },
    getAttendedSchoolByLevel(level){
        if(!level) throw "plz provide a education level";

        return attendedSchools[level];
    }
}

module.exports = exportedMethods;
