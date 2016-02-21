import util from './util.js';


var TaskUtil = {

	taskToListItem: function(task){

		var task_string = "";
		var isComplete = "";

		var timestamp_string = "";

		if(task.completed == true){
			isComplete = 'completed';
			timestamp_string = "<span class='finish-time'>" + this.convertToTime(task.target_time - task.finish_time) + "</span><br/>" + this.convertToTime(task.target_time);

		}else{
			isComplete = 'incomplete';
			timestamp_string = this.convertToTime(task.target_time);
		}


		task_string += 

		"<div class='task-item'>" + 

			
			
				"<div class='circle " + isComplete + "' data-id='" + task.id + "'></div>" + 
				"<li class='" + isComplete + "'>" + 


				"<div class='clickable-area " + isComplete + "' data-id='" + task.id + "'>" + 

				"<div class='list_text'>" + util.getTaskString(task.task_string) + "</div>" + 
			
				"</div>" + 


			"<a href='#' class='delete-button' data-id='" + task.id + "'> <span class='close rounded'></span></a>" + 
			"<span class='timestamp'>" + timestamp_string + "</span></li>" + 
			

		"</div>";


		return task_string;

	},


	convertToTime: function(time_string){

		var minutes;
		var seconds;

		if(Math.floor(time_string / 60) < 10){
			minutes = "0" + Math.floor(time_string / 60) + "m ";
		}else{
			minutes = Math.floor(time_string / 60) + "m ";
		}

		if(time_string % 60 < 10){
			seconds = "0" + time_string % 60 + "s";
		}else{
			seconds = time_string % 60 + "s";
		}


		// return Math.floor(time_string / 60) + "m " + time_string % 60 + "s";
		return minutes + seconds;
	},



};


export default TaskUtil;






