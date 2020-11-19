let tasks = [];

function addTaskToList() {

	let taskList = document.getElementById('taskList');
	
	let newTask = document.createElement('li');
	newTask = taskList.appendChild(newTask);
	newTask.innerText = document.getElementById('newTask').value;
	newTask.className = 'task';

	let btnDone = document.createElement('input');
	btnDone.type = 'button';
	btnDone.value = 'Done';
	btnDone.className = 'task';
	btnDone.addEventListener('click', function() { markTaskAsDone(event) }, false); 
	newTask.appendChild(btnDone);

	let btnDel = document.createElement('input');
	btnDel.type = 'button';
	btnDel.value = 'X';
	btnDel.className ='task';
	btnDel.addEventListener('click', deleteTask, false);
	newTask.appendChild(btnDel);

	tasks.push(newTask);

	console.log(tasks);

	document.getElementById('newTask').value = '';	
}

function clearList() {
	let taskList = document.getElementById('taskList');
	while (taskList.firstChild) {
		taskList.removeChild(taskList.firstChild);
	}

	tasks = [];
}

function markTaskAsDone(event) {
	let doneTask = event.target.parentNode;
	doneTask.style.textDecoration = 'line-through';

	doneTask.removeChild(event.target);
}

function deleteTask() {
	let doneTask = event.target.parentNode;
	tasks.pop(doneTask);

	let taskList = document.getElementById('taskList');
	taskList.removeChild(doneTask);
}