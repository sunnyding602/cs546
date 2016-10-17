let hobbies = {
    "Bamboo Flute": {"Sound Cloud Profile": "http://www.ximalaya.com/2472682/profile"},
    "Nanchakus": {"desc": "I just practiced a lot"},
}


let exportedMethods = {
    getAllHobbies(){
        let names = [];
        for(let key in hobbies){
            names.push(key);
        }
        return names;
    },
    getHobby(name){
        if(!name) throw "plz provide a hobby name";

        return hobbies[name];
    }
}

module.exports = exportedMethods;
