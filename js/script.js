// Function to Add a New Task
function addTask() {
  const input = document.getElementById('taskInput');
  const alertBox = document.getElementById('alertBox');
  const taskText = input.value.trim();

  //  Show alert if input is empty
  if (taskText === '') {
    alertBox.classList.remove('d-none');
    setTimeout(() => alertBox.classList.add('d-none'), 2000);
    return;
  }

  // Create new list for task
  const li = document.createElement('li');
  li.className = 'list-group-item';

  // Add task content
  li.innerHTML = `
    <span onclick="toggleDone(this)" style="cursor:pointer;">
      ${taskText}
    </span>
    <div class="task-actions">
      <button class="btn btn-sm btn-success" onclick="toggleDone(this.parentElement.parentElement.querySelector('span'))">
        <i class="bi bi-check-circle"></i>
      </button>
      <button class="btn btn-sm btn-danger" onclick="deleteTask(this)">
        <i class="bi bi-trash3-fill"></i>
      </button>
    </div>
  `;

  // Append to task list
  document.getElementById('taskList').appendChild(li);

  // Clear input and update count
  input.value = '';
  updateCount();
}

// ✅Toggle "done" of task
function toggleDone(span) {
  const li = span.closest('li');
  li.classList.toggle('done');
}

// for Delete 
function deleteTask(button) {
  const li = button.closest('li');
  li.remove();
  updateCount();
}

//  show Update task count 
function updateCount() {
  const taskList = document.getElementById('taskList');
  const count = taskList.getElementsByTagName('li').length;
  document.getElementById('taskCount').innerText = count;
}

// after page loading
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('taskInput');
  input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      addTask();
    }
  });
});
