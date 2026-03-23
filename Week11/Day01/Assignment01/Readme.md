Assignment: Build a Basic Task Manager App

🎯 Objective
Create a simple Task Manager application using JavaScript that:

Reads a task from an input field
Adds the task when a button is clicked
Stores tasks in LocalStorage
Displays tasks in the UI

🧩 Requirements
Your app must:
Allow the user to enter a task
Add the task to a list when clicking a button
Store all tasks in LocalStorage
Show all tasks on the screen
Keep tasks after page refresh

🧑‍💻 Your Tasks
🔹 Task 1: Select Elements

In script.js, get the HTML elements:

// TODO: get input element
// TODO: get button element
// TODO: get task list element
🔹 Task 2: Create Tasks Array
// TODO: load tasks from LocalStorage
// if no tasks exist, use an empty array
🔹 Task 3: Display Tasks

Create a function to show tasks in the UI:

function renderTasks() {
  // TODO: clear the list

  // TODO: loop through tasks array

  // TODO: create <li> for each task

  // TODO: add task text to <li>

  // TODO: append <li> to task list
}
🔹 Task 4: Add Task on Button Click
// TODO: add click event to button

// Inside event:
// 1. get input value
// 2. prevent empty input
// 3. add task to array
// 4. save tasks to LocalStorage
// 5. call renderTasks()
// 6. clear input
🔹 Task 5: Show Tasks on Page Load
// TODO: call renderTasks() when page loads
⚠️ Important Rules
✅ Use JSON
// Save data
localStorage.setItem("tasks", JSON.stringify(tasks));

// Load data
JSON.parse(localStorage.getItem("tasks"));