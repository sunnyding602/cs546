const express = require('express');
const router = express.Router();
const data = require("../data");
const peopleData = data.people;
const eventsData = data.events;


// Single Person Page
router.get("/:id", (req, res) => {
    // Find a person by the provided id, 
    // then display their information
    // As well as listing all events that they will be attending
    // Each of these events need to link to the event page, and show the event name
    // If a person is not found, display the 404 error page
	peopleData.getPerson(parseInt(req.params.id)).then(person=>{
		eventsData.getEventsForAttendee(person.id).then(events=>{
			res.render("people/person", { person: person, events: events });
		});	
	}).catch(err=>{
        res.render("misc/404", {err: err})
	});
});

// People Index Page
router.get("/", (req, res) => {
    // Display a list of all people; it can be in an unordered list, or a table
    // Each of these people need to link to the single person page
    peopleData.getAllPeople().then((people)=>{
        res.render("people/index", { people:people });
    }).catch(err=>{
        res.render("misc/404", {err: err})
    });
});

module.exports = router;
