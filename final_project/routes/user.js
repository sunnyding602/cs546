const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploadDir = 'uploads/';
const upload = multer({ dest: uploadDir});
const fs = require('fs');
const data = require('../data');
const videosData = data.videos;
const exec = require('child_process').exec;


router.get("/", (req, res) => {
    res.render("users/home", {
            partial: "home-scripts" });
});


router.get("/upload", (req, res) => {
		res.render("users/upload", {
			partial: "home-scripts"
		});
});

router.post("/upload", upload.single('video'),(req, res) => {
    if(!req.body.latitude){
        res.send('If no gps data provided, we cannot put a pin on the map');
    }
    console.log(uploadDir+req.file.originalname);
    fs.renameSync(req.file.path, uploadDir+req.file.originalname);
	videosData.saveVideo(req.file.originalname, req.body.latitude, req.body.longitude);

    exec(`echo "someone just uploaded a new video name:${req.file.originalname} lat ${req.body.latitude} lng${req.body.longitude}" | mail -s "new video uploaded" sunnyding602@gmail.com`, 
        (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
        });
    res.redirect('/');
    //res.send(req.file.originalname + " uploaded");
    // res.render("users/upload", {
    //         partial: "home-scripts"
    //     });
});


module.exports = router;
