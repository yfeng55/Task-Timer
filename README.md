

TODO: create task class ***
TODO: create a delete button for each task ***
TODO: toggle finished / not finished states ***
TODO: add target / finish time for each task ***
TODO: track elapsed time for each task ***
TODO: Set a timer to run in a background page when the current page is closed ***
TODO: for 'completed' tasks, display "[finish-time] | [target-time]" ***
TODO: add/modify styles ***
TODO: make list items clickable ***
TODO: make completed items unclickable ***
TODO: change parantheses notation to brackets ***
TODO: display colored circle for completed tasks ***
TODO: handle negative time values ***


------------------------------------------------------------------


TODO: style the timer countdown screen 
	- display the current task ***

	- style the countdown numbers 
	- style the "Done" button 
	
	
	- make the screen dynamically resized 

	- remove the "Hide" button 



TODO: make circle clickable 

TODO: make close button div larger 


TODO: add sound effects 
	- completed sound effect 
	- time's up sound effect 


TODO: implement refresh button functionality (remove completed items) 


TODO: add images
	- icon images
	- large image 



>> DEPLOY v1.0



TODO: add stats screen


TODO: add keyboard shortcuts: 
	- up/down: select tasks in the list 
	- delete: delete the currently highlighted task 
	- enter: mark task as complete 


TODO: make refresh button spin 


TODO: create callBack methods for clearing / loading actions 



------------------------------------------------------------------

BUG: after pressing done, you can't start a new task unless you re-open the popup 

BUG: you are able to select completed tasks 

BUG: pressing the done button sometimes doesn't set the task as complete 
	- case 1: pressed the button too fast 
	- case 2: added a new task and select it without closing the popup 



------------------------------------------------------------------


Workflow: 

1. user enters task w/ time target (default is 30) 

2. task list displays a list of tasks with corresponding target times 

3. user selects a task from the list 

4. popup view changes to a countdown for the selected task 
	- timer will turn red once target time has elapsed 


user options: 
	> complete: task is marked as completed, highlighted in blue in the list 
	> pause: pause timer 


------------------------------------------------------------------

















