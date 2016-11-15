const fileData = require('./fileData');
let exportedMethods = {
    saveVideo(name, lat, lon){
		let video = { name : name, lat: lat, lon : lon};
		fileData.getFileAsJSON('videos_data').then(videos=>{
			videos.push(video);
			fileData.saveJSONToFile('videos_data', videos).then(isSaved=>{
				console.log( 'isSaved' +  isSaved);
			});
		});
    },
	getVideos(){
		return fileData.getFileAsJSON('videos_data');
	}
}

module.exports = exportedMethods;
