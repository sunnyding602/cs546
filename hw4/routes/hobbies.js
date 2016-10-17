const express = require('express');
const router = express.Router();
const data = require("../data");
const hobbyData = data.hobbies;

router.get("/:hobby", (req, res) => {
    try{
        let hobby = hobbyData.getHobby(req.params.hobby);
        res.json(hobby);
    }catch(error){
        res.status(404).json({message: error});
    }
});

router.get("/", (req, res) => {
    let names = hobbyData.getAllHobbies();
    res.json(names);
});


module.exports = router;
