const taskInput = document.getElementById('taskInput');
const timeInput = document.getElementById('timeInput');
const dayInput = document.getElementById('dayInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  const timeText = timeInput.value.trim();
  const dayText = dayInput.value.trim();
  
  if (taskText !== '' && timeText !== '' && dayText !== '') {
    const li = document.createElement('li');
    li.innerHTML = `
      <input type="checkbox">
      <span>Task: ${taskText}</span>
      <span>Time: ${timeText}</span>
      <span>Day: ${dayText}</span>
      <button class="deleteButton">Delete</button>
    `;
    taskList.appendChild(li);
    taskInput.value = '';
    timeInput.value = '';
    dayInput.value = '';
  }
}

taskList.addEventListener('click', (event) => {
  if (event.target.className === 'deleteButton') {
    event.target.parentElement.remove();
  }
});
