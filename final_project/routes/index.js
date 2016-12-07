const userRoutes = require("./user");
const path = require('path');
const data = require('../data');
const videosData = data.videos;
const userData = data.users;

const constructorMethod = (app) => {
    app.use(userData.attachUserToReq);
    
    app.use("/users", userRoutes);
    
    app.get("/", (req, res) => {//home page, you can also call it index.html

		videosData.getVideos().then(videos=>{
			console.log(videos);

			res.render("home", {//get gps crood example
				partial: "home-scripts",
				videos: videos
			});

		});
        //res.sendFile(path.resolve(__dirname, '../views/video.html'));
    })

    app.use("*", (req, res) => {
        res.sendStatus(404);
    })

};

module.exports = constructorMethod;
