
import taskUtil from './task_util.js';


var Util = {

	//takes a Task object
	addTaskToLocalStorage: function(task){

		//store task in an array
		var temp_task_array = new Array();
		temp_task_array[0] = task;


		// if localStorage is empty
		if( localStorage.getItem("tasks") === undefined || localStorage.getItem("tasks") === null ){
			console.log('localStorage is null');
			
			localStorage.setItem('tasks', JSON.stringify(temp_task_array));

			console.log(localStorage.getItem("tasks"));
		}
		else{

			var tasks = JSON.parse(localStorage.getItem("tasks"));

			console.log(tasks);

			tasks.push(task);

			localStorage.setItem('tasks', JSON.stringify(tasks));

			console.log(localStorage.getItem("tasks"));
		}

	},



	fetchTasksFromLocalStorage: function(){

		var task_string = "";


		console.log(localStorage.getItem("tasks"));


		if(localStorage.getItem("tasks") === undefined || localStorage.getItem("tasks") === null){
			console.log("tasks is UNDEFINED");
		}
		else{

			var tasks = JSON.parse(localStorage.getItem("tasks"));

			console.log(tasks);


			task_string = "";

			tasks.forEach(function(task){
				if(task.completed == false){
					task_string += taskUtil.taskToListItem(task);
				}
			});
			tasks.forEach(function(task){
				if(task.completed == true){
					task_string += taskUtil.taskToListItem(task);
				}
			});


		}
		

		return task_string;

	},


	clearLocalStorage: function(){
		localStorage.clear();
	},



	// Extract values from user input

	getTargetTime: function(user_input){

		//extract text from parentheses

		var regex = /\[([^)]+)\]/;


		if(regex.test(user_input) == true) {
			return parseFloat(user_input.match(/\[([^)]+)\]/)[1]) * 60;
		}else{
			return 30 * 60;
		}
		
	},

	getTaskString: function(user_input){
		return user_input.replace(/ *\[[^)]*\] */g, "");
	},



	//return title string (including today's date)

	getTitleString: function(){

		var titlestring = "";
		var date = new Date();

		var month;
		var day;

		(date.getMonth() < 10) ? month = "0" + (date.getMonth() + 1) : month = (date.getMonth()+1);
		(date.getDate() < 10) ? day = "0" + date.getDate() : day = date.getDate();

		titlestring += "" + month + "/" + day + " <b>|</b> TASKS";	
		
		return titlestring;
	},
	


};

export default Util;




































