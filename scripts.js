function getValidStatus() {
  let status = prompt("Enter task status (todo, doing, or done):").toLowerCase();
  while (status !== "todo" && status !== "doing" && status !== "done") {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    status = prompt("Enter task status (todo, doing, or done):").toLowerCase();
  }
  return status;
}

// This will also ask the user how many tasks they want to add (but limit to 3)
let numberOfTasks = parseInt(prompt("How many tasks do you want to add?"), 10);

// Check if they want more than 3 tasks
if (numberOfTasks > 3) {
  alert("There are enough tasks on your board, please check them in the console.");
  numberOfTasks = 3; // Set to maximum of 3
}

// This store tasks here
const tasks = [];
let taskId = 1; // Start ID counter

// Loop to collect all tasks at once to aviod distractions
for (let i = 1; i <= numberOfTasks; i++) {
  const title = prompt(`Enter title for Task ${i}:`);
  const description = prompt(`Enter description for Task ${i}:`);
  const status = getValidStatus();
  
  // Add task with unique ID
  tasks.push({ 
    id: taskId,
    title: title, 
    description: description, 
    status: status 
  });
  
  taskId++; // Increase ID for next task
}

// First, show ALL tasks
console.log("All tasks:");
tasks.forEach(task => {
  console.log(`ID: ${task.id}, Title: '${task.title}', Description: '${task.description}', Status: '${task.status}'`);
});

// Then filter out completed tasks
const completedTasks = tasks.filter(task => task.status === "done");

// Show completed tasks
console.log("Completed tasks:");
if (completedTasks.length > 0) {
  completedTasks.forEach(task => {
    console.log(`ID: ${task.id}, Title: '${task.title}', Status: '${task.status}'`);
  });
} else {
  console.log("No tasks completed, let's get to work!");
}