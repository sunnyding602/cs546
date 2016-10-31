const express = require('express');
const router = express.Router();
const data = require("../data");
const peopleData = data.people;
const eventsData = data.events;
const locationsData = data.locations;

// Single Event Page
router.get("/:id", (req, res) => {
    // Find a event by the provided id, 
    // then display its information
    // As well as listing the names of all the attendees that will be at this event 
    // Each of these attendee names will need to link to their person page
    // You will also list the location of the event, said location's name, and a link to the location page
    // If a event is not found, display the 404 error page
	eventsData.getEvent(parseInt(req.params.id)).then(myevent=>{
		peopleData.getAllPeople().then(people=>{
			locationsData.getLocation(myevent.location).then(location=>{
			console.log({ 'event': myevent, people:people,location: location });
				let attendees = people.filter( x=> myevent.attendees.indexOf(x.id))
				res.render("events/event", { 'event': myevent, attendees:attendees,location: location });
			});
		});
	}).catch(err=>{
        res.render("misc/404", {err: err})
	});
});

// Event Index Page
router.get("/", (req, res) => {
    // Display a list of all events; it can be in an unordered list, or a table
    // Each of these events need to link to the single event page

	eventsData.getAllEvents().then(events=>{
		res.render("events/index", { 'events': events});
	}).catch(err=>{
        res.render("misc/404", {err: err});
	});

});

module.exports = router;
