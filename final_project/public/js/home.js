(function ($, localStorage, location) {
	var location_hash_td = $('#hash'); 
	var counts_td = $('#counts');
	var myform = $('#myform');
	var string_input = $('#string');
	var input_value_td = $('#input_value');
	var submitted_times_td = $('#submitted_times');

	if(location.hash){
		location_hash_td.html(location.hash);
	}
	window.onhashchange = function(){
		location_hash_td.html(location.hash);
	}
	
	window.setInterval(function(){
		if(!localStorage['counts']){
			localStorage['counts'] = 1;	
		}else{
			localStorage['counts']++;	
		}
		counts_td.html(localStorage['counts']);
	}, 1500);

	localStorage['submitted_times'] = 0;
	myform.submit(function(event){
		var value = string_input.val();
		if(!localStorage['submitted_times']){
			localStorage['submitted_times'] = 1;
		}else{
			localStorage['submitted_times']++;
		}
		input_value_td.html(value);
		submitted_times_td.html(localStorage['submitted_times']);
		event.preventDefault();
	});

})(jQuery, window.localStorage, window.location);

