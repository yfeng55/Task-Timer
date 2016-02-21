


export default class Timer{

	constructor(duration){
		
		this.duration = duration;

		this.minutes = null;
		this.seconds = null;

		this.intervalId;

	}



	countdown(display){

		this.minutes = parseInt(this.duration / 60, 10);
        this.seconds = parseInt(this.duration % 60, 10);


    	if((this.minutes + this.seconds) >= 0){
    		this.minutes = Math.abs(this.minutes) < 10 ? "0" + this.minutes : this.minutes;
        	this.seconds = Math.abs(this.seconds) < 10 ? "0" + this.seconds : this.seconds;
        	display.text(this.minutes + ":" + this.seconds);
    	}else{
    		// this.minutes = Math.abs(this.minutes) < 10 ? this.minutes : this.minutes;
        	// this.seconds = Math.abs(this.seconds) < 10 ? this.seconds : this.seconds;
        	// display.text("- " + Math.abs(this.minutes) + ":" + Math.abs(this.seconds));

	       	if(Math.abs(this.minutes) < 10 && Math.abs(this.seconds) >= 10){
        		display.text("- " + "0" + Math.abs(this.minutes) + ":" + Math.abs(this.seconds));
        	}
	        else if(Math.abs(this.seconds) < 10 && Math.abs(this.minutes) >= 10){
	        	display.text("- " + Math.abs(this.minutes) + ":" + "0" + Math.abs(this.seconds));
	        }else{
	        	display.text("- " + "0" + Math.abs(this.minutes) + ":" + "0" + Math.abs(this.seconds));
	    	}

    	}
    		
       
        

        this.duration = this.duration - 1;


	}



	start(display) {
	    
		//store duration in LocalStorage
		localStorage.setItem('timerOn', "true");
		localStorage.setItem('duration', this.duration);


		this.countdown(display);

		//display countdown
	    var that = this;
	    this.intervalId = setInterval(function (){

	    	that.countdown(display);

	    }, 1000);

	}



	stop(){

		localStorage.setItem('timerOn', "false");
		clearInterval(this.intervalId);

		//set icon text
		chrome.browserAction.setBadgeText({text: ""});

	}



};
