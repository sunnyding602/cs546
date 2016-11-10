const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploadDir = 'uploads/';
const upload = multer({ dest: uploadDir});
const fs = require('fs');


router.get("/", (req, res) => {
    res.render("users/home", {
            partial: "home-scripts"
        });
});


router.get("/upload", (req, res) => {
    console.log("fdsfdsfs");
    res.render("users/upload", {
            partial: "home-scripts"
        });
});

router.post("/upload", upload.single('video'),(req, res) => {
    console.log(req.file);
    fs.renameSync(req.file.path, uploadDir+req.file.originalname);
    res.send(req.file.originalname + " uploaded");
    // res.render("users/upload", {
    //         partial: "home-scripts"
    //     });
});


module.exports = router;