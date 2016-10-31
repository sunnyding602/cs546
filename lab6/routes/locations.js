const express = require('express');
const router = express.Router();
const data = require("../data");
const peopleData = data.people;
const eventsData = data.events;
const locationsData = data.locations;

// Single Location Page
router.get("/:id", (req, res) => {
    // Find a location by the provided id, 
    // then display its information
    // As well as listing all events that will be at this location
    // Each of these events need to link to the event page and show the event name
    // If a location is not found, display the 404 error page
	locationsData.getLocation(parseInt(req.params.id)).then(location=>{
		eventsData.getAllEvents().then(eventList=>{
			let eventsInCurLoc = eventList.filter(x => x.location === location.id);
			console.log(eventsInCurLoc);
			res.render("locations/location", { 'location': location, events:eventsInCurLoc});
		});
	}).catch(err=>{
        res.render("misc/404", {err: err});
	});
});

// Location Index Page
router.get("/", (req, res) => {
    // Display a list of all locations; it can be in an unordered list, or a table
    // Each of these locations need to link to the single location page
	locationsData.getAllLocations().then(locations=>{
		res.render("locations/index", { 'locations': locations});
	}).catch(err=>{
        res.render("misc/404", {err: err});
	});
});

module.exports = router;
