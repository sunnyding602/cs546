const express = require('express');
const router = express.Router();
const data = require("../data");
const educationData = data.education;

router.get("/:level", (req, res) => {
    try{
        let school = educationData.getAttendedSchoolByLevel(req.params.level);
        res.json(school);
    }catch(error){
        res.status(404).json({message: error});
    }
});

router.get("/", (req, res) => {
    let attendedSchools = educationData.getAllAttendedSchools();
    res.json(attendedSchools);
});


module.exports = router;
