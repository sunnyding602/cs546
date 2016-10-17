const express = require('express');
const router = express.Router();
const data = require("../data");
const classData = data.classes;

router.get("/details", (req, res) => {
    try{
        let courseDetail = classData.getCourseDetail(req.query.code);
        res.json(courseDetail);
    }catch(error){
        res.status(404).json({message: error});
    }
});

router.get("/", (req, res) => {
    let courseCodes = classData.getAllCourseCodes();
    res.json(courseCodes);
});


module.exports = router;
