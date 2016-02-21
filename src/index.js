import $ from 'jquery';

import util from './util/util.js';
import taskUtil from './util/task_util.js';

import Task from './models/task.js';
import Timer from './timer.js';




$(document).ready(function(){


	//if Timer is Set
	if(localStorage.getItem("timerOn") == "true"){

		//set the current task display:
		$('#current-task').html(util.getTaskString(localStorage.getItem('currentTask-string')));


		//show countdown screen 
		try{
			$('#timer-screen').height($(window).height());
	    	$('#timer-screen').show();
		}catch(e){	
		}
		

		setTimeout(function(){
			$('#timer-screen').height($(window).height());
	    	$('#timer-screen').show();
		}, 100);




		var timer;

		var duration = parseInt(localStorage.getItem('duration'));
		timer = new Timer(duration);

		timer.start($('#countdown'));
	}





	//globals
	var isSelected = false;
	var currentTask = localStorage.getItem('currentTask');

	var timer;


	// onLoad -- fetch tasks from localStorage
	$('#task_list').html(util.fetchTasksFromLocalStorage());

	var titlestring = util.getTitleString();

	$('#title').html(titlestring);


	// add new task
	$('#newtask-field').keyup(function(event){
		
		if($('#newtask-field').val() != ''){

			if(event.which == 13){
				appendTask();
			}
		
		}
	});



	$('#clear-button').click(function(){
		util.clearLocalStorage();
		clearList();
	});



	$('#task_list').on('click', '.clickable-area', function(){
		
		if($(this).hasClass("completed") == false){



			if(isSelected == false){

				// set currentTask-string
				localStorage.setItem('currentTask-string', $(this).children('.list_text').text());
				

				var tasks = JSON.parse(localStorage.getItem("tasks"));
				var task_id = $(this).data('id');
				

				isSelected = true;
				// currentTask = task_id;

				localStorage.setItem('currentTask', task_id);


				var updateIndex = 0;
				for(var i=0; i<tasks.length; i++){
					if(tasks[i].id == task_id){ updateIndex = i; }
				}


				console.log("ARRAY LOCATION:");
				console.log(updateIndex);


				tasks[updateIndex].selected = true;
				console.log("SELECTED TASK");



				localStorage.setItem('tasks', JSON.stringify(tasks));


				//launch timer
				var minutes = tasks[updateIndex].target_time,
		        display = $('#countdown');
		    	

		    	// intervalID = util.startTimer(minutes, display);
		    	timer = new Timer(minutes, display);
		    	timer.start(display);

		    	$('#timer-screen').height($(window).height());
		    	$('#timer-screen').show();

		    	//set the current task display:
				$('#current-task').html(util.getTaskString(localStorage.getItem('currentTask-string')));

			}else{
				$('#timer-screen').height($(window).height());
				$('#timer-screen').show();	
		
				//set the current task display:
				$('#current-task').html(util.getTaskString(localStorage.getItem('currentTask-string')));
			}



		}

		

	});



	$('#task_list').on('click', '.delete-button', function(){
		var tasks = JSON.parse(localStorage.getItem("tasks"));

		var task_id = $(this).data('id');

		console.log("TASK ID: ");
		console.log(task_id);


		var removeIndex = 0;
		for(var i=0; i<tasks.length; i++){
			
			if(tasks[i].id == task_id){ removeIndex = i; }

		}

		console.log("ARRAY LOCATION:")
		console.log(removeIndex);


		var removed = tasks.splice(removeIndex, 1);
		console.log("REMOVED: ");
		console.log(removed);


		localStorage.setItem('tasks', JSON.stringify(tasks));


		$(this).closest('div').remove();

		// clearList();
		// $('#task_list').html(util.fetchTasksFromLocalStorage());

	});


	// HIDE BUTTON
	$('#hide-timer-screen').click(function(){
		$("#timer-screen").hide();
	});


	// DONE BUTTON
	$('#done-timer-screen').click(function(){
		var tasks = JSON.parse(localStorage.getItem("tasks"));

		var task_id = currentTask;

		// console.log("CURRENT TASK");
		// console.log(currentTask);


		var doneIndex = 0;
		for(var i=0; i<tasks.length; i++){
			
			if(tasks[i].id == task_id){ doneIndex = i; }

		}

		timer.stop();
		$('#timer-screen').hide();


		tasks[doneIndex].completed = true;
		tasks[doneIndex].finish_time = (timer.minutes * 60) + timer.seconds;


		localStorage.setItem('tasks', JSON.stringify(tasks));


		//reload list
		clearList();
		$('#task_list').html(util.fetchTasksFromLocalStorage());

		

	});



	/////////////////////////////////////////////////////////////////////////////////



	function appendTask(){


		var userinput = $('#newtask-field').val();

		var newtask = new Task(userinput, util.getTargetTime(userinput));


		$('#task_list').append(taskUtil.taskToListItem(newtask));
		
		util.addTaskToLocalStorage(newtask);

		// clear text input field
		$('#newtask-field').val('');

	}



	function clearList(){
		$('#task_list').html('');
	}



});






















