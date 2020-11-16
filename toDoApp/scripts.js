function addTaskToList() {

	let newTask = document.createElement('li');

	let taskList = document.getElementById('taskList');
	newTask = taskList.appendChild(newTask);
	newTask.innerText = document.getElementById('newTask').value;
}

function clearList() {
	alert('Cleared');
}