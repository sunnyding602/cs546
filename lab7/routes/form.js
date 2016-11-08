const express = require('express');
const router = express.Router();
const data = require("../data");
const form = data.form;

router.get("/static", (req, res) => {
    res.render("form/static", {});
});

router.get("/server", (req, res) => {
    res.render("form/server", {});
});

router.post("/server", (req, res) => {
    let text = req.body.someText;
    let str = req.body.insertedText;
    let times = !req.body.numberOfTimes ? 0 : parseInt(req.body.numberOfTimes);
    let num = !req.body.numberOfChar ? 0 : parseInt(req.body.numberOfChar);
    let result;

    try {
        result = data.form.computeResult(text, str, times, num);

    } catch (e) {
        res.render("form/server", { someText: text, insertedText: str, numberOfTimes: times, numberOfChar:num, error: e });
        return;
    }

    res.render("form/server", { someText: text, insertedText: str, numberOfTimes: times, numberOfChar:num, result: result });
});

module.exports = router;