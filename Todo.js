function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  if (taskInput.value !== '') {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const taskText = document.createTextNode(taskInput.value);

    span.innerHTML = '&times;';
    span.addEventListener('click', () => {
      li.remove();
    });

    li.appendChild(span);
    li.appendChild(taskText);
    taskList.appendChild(li);

    taskInput.value = '';
  }
}
