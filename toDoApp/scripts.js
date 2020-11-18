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
	btnDone.addEventListener('click', markTaskAsDone, false); 
	newTask.appendChild(btnDone);

	let btnDel = document.createElement('input');
	btnDel.type = 'button';
	btnDel.value = 'X';
	btnDel.className ='task';
	btnDel.addEventListener('click', deleteTask, false);
	newTask.appendChild(btnDel);

	document.getElementById('newTask').value = '';	
}

function clearList() {
	let taskList = document.getElementById('taskList');
	while (taskList.firstChild) {
		taskList.removeChild(taskList.firstChild);
	}
}

function markTaskAsDone() {
	alert('Done');
}

function deleteTask() {
	alert('Delete');
}