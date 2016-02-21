
export default class Task{



	constructor(task_string, task_target){
		
		try{
			var tasks = JSON.parse(localStorage.getItem("tasks"));
			this.id = tasks[tasks.length - 1].id + 1;
		}catch(e){
			this.id = 1;
		}

		this.task_string = task_string;
		this.completed = false;

		this.target_time = task_target;
		this.finish_time = 0;
	
		this.selected = false;
	}





	setComplete(){
		this.completed = true;
	}

	setNotComplete(){
		this.completed = false;
	}

	getTaskString(){
		return this.task_string;
	}

	isCompleted(){
		return this.completed;
	}

};



