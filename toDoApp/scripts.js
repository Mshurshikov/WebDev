function addTaskToList() {

	let newTask = document.createElement('li');

	let taskList = document.getElementById('taskList');
	newTask = taskList.appendChild(newTask);
	newTask.innerText = document.getElementById('newTask').value;

	let btnDone = document.createElement('input');
	btnDone.type = 'button';
	btnDone.value = 'Done';
	btnDone.addEventListener('click', markTaskAsDone, false); 
	newTask.appendChild(btnDone);

	let btnDel = document.createElement('input');
	btnDel.type = 'button';
	btnDel.value = 'X';
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