

var isTimerSet = "false";



function ping(){
	
	console.log('ping');
	isTimerSet = localStorage.getItem('timerOn');

	console.log("ISTIMERSET");
	console.log(isTimerSet);

	// if(typeof localStorage.getItem("duration") != undefined && localStorage.getItem("duration" != "undefined")){
	// 	isTimerSet = "true";
	// }

}




setInterval(function(){

	ping();	

	if(isTimerSet == "true"){

		//update duration
		var remaining = parseInt(localStorage.getItem('duration'));
		localStorage.setItem('duration', --remaining);


		var minutes = Math.floor(parseInt(localStorage.getItem('duration')) / 60);
		var seconds = parseInt(localStorage.getItem('duration')) % 60;

		if(minutes > 0 || seconds > 0){
			minutes = minutes < 10 ? "0" + minutes : minutes;
	        seconds = seconds < 10 ? "0" + seconds : seconds;
	    }
	    else{
	    	minutes = "00";
        	seconds = "00";
	    }


		// console.log('minutes: ' + minutes);
		// console.log('seconds: ' + seconds);

		var time_string = minutes + ":" + seconds;


		//set icon text
		chrome.browserAction.setBadgeText({text: time_string});
	}	


}, 1000);








