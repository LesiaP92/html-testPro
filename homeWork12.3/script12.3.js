const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const newTask = document.createElement('li');
        newTask.innerHTML = `${taskText} <button>Видалити</button>`;
        taskList.appendChild(newTask);
        taskInput.value = '';
    }
});

taskList.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const task = event.target.parentElement;
        task.remove();
    }
});
