# To-Do List

This is a simple To-Do List web application that allows users to add, reorder, and delete tasks. The tasks are saved in the browser's local storage, so they persist even after the page is refreshed.

## Features

- **Add Tasks**: Enter a task in the input field and press Enter to add it to the list.
- **Reorder Tasks**: Tasks are automatically reordered based on their checked/unchecked status.
- **Delete Tasks**: Click the trash icon next to a task to delete it.
- **Clear All Tasks**: Click the clear button to remove all tasks from the list.
- **Persistent Storage**: Tasks are saved in local storage and will persist across page reloads.

## Project Structure

- **index.html**: The main HTML file that contains the structure of the web page.
- **style.css**: The CSS file that styles the web page.
- **script.js**: The JavaScript file that contains the logic for adding, reordering, and deleting tasks.
- **images/**: A directory containing images for icons used in the project.

## How to Use

1. Clone the repository to your local machine.
2. Open `index.html` in your web browser.
3. Add tasks using the input field and manage them using the provided features.

## Code Overview

### `script.js`

- `updateLocalStorage()`: Updates the local storage with the current list of tasks.
- `reorderTasks()`: Reorders the tasks based on their checked/unchecked status.
- `addTask(task)`: Adds a new task to the list.

### `style.css`

- Styles for the various elements of the to-do list, including the input field, task list, and buttons.

## License

This project is licensed under the MIT License.