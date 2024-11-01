inputEl = document.querySelector('input');
ulEl = document.querySelector('ul');

// Load tasks from local storage
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
tasks.forEach(task => addTask(task.label));
// Restore checked/unchecked state
tasks.forEach((task, index) => {
    ulEl.children[index].querySelector('input').checked = task.checked;
});

updateLocalStorage();

inputEl.focus();

function updateLocalStorage() {
    // Also store checked/unchecked state
    const tasks = Array.from(ulEl.children).map(item => ({
        label: item.querySelector('label').textContent,
        checked: item.querySelector('input').checked
    }));
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function reorderTasks() {
    const items = Array.from(ulEl.children);
    const checkedItems = items.filter(item => item.querySelector('input').checked);
    const uncheckedItems = items.filter(item => !item.querySelector('input').checked);

    // Clear the list and append unchecked items first, then checked items
    ulEl.innerHTML = '';
    uncheckedItems.forEach(item => ulEl.appendChild(item));
    checkedItems.forEach(item => ulEl.appendChild(item));
    updateLocalStorage();
}

function addTask(task) {
    if (task) {
        const liEl = document.createElement('li');
        liEl.innerHTML = '<input type="checkbox"><label>' + task + '</label> <img src="images/trash.png">';
        const labelEl = liEl.querySelector('label');
        liEl.querySelector('input').addEventListener('click', reorderTasks);
        liEl.querySelector('img').addEventListener('click', function () {
            liEl.remove();
            reorderTasks();
        });
        ulEl.appendChild(liEl);
        inputEl.value = ''; // clear the input field
        reorderTasks();
    }
}

inputEl.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        console.log('Hey');
        addTask(inputEl.value);
    }
});

const clearBtn = document.querySelector('.clear-button');
clearBtn.addEventListener('click', function () {
    ulEl.innerHTML = '';
    updateLocalStorage();
});

