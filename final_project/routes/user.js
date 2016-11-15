const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploadDir = 'uploads/';
const upload = multer({ dest: uploadDir});
const fs = require('fs');
const data = require('../data');
const videosData = data.videos;


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
    console.log(req.file);
    fs.renameSync(req.file.path, uploadDir+req.file.originalname);
	videosData.saveVideo(req.file.originalname, req.body.latitude, req.body.longitude);
    res.send(req.file.originalname + " uploaded");
    // res.render("users/upload", {
    //         partial: "home-scripts"
    //     });
});


module.exports = router;
