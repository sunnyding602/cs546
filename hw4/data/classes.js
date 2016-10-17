let classes = {
    "cs546" : { "name":"Web Programming I", "professor": "Philip Barresi", "description": `I'm a professional front-end developer with a great deal of experience in cross-platform application design. I've worked with a number of companies (both startups and well-developed) on long and short-term projects. Currently, I am exploring web accessibility and how we can make the web more approachable, as well as technology's role in educational settings.
        
        When not programming, I am an adjunct instructor at Stevens Institute of Technology, teaching graduate Web Development.`},
    "cs561" : { "name":"Database Concept", "professor": "Kin", "description": "M 6:15-8:45 K228"},
    "cs631" : { "name":"Adv Programming in a Unix Env", "professor": "Schaumann Jan", "description": "M 06:15-08:45PM K390"},
    "cs545" : { "name":"Human-Computer Interaction", "professor": "Vesonder Gregg", "description": "R 03:00-05:30PM P120"},
    "cs810" : { "name":"Prog Internet of Things w/iOS", "professor": "Damopoulos Dimitrios", "description": "R 06:15-08:45PM B715"}
}


let exportedMethods = {
    getAllCourseCodes(){
        codes = [];
        for( let code in classes){
            codes.push(code);
        }
        return codes;
    },
    getCourseDetail(code){
        if(!code) throw "You should provide course code";

        return classes[code];
    }
}

module.exports = exportedMethods;

