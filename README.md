# JSL03 Project Brief: Console-Based Task Manager
I’m creating a simple task tracker. The program asks the user for task details (title, description, and status). Each task is stored as an object inside an array. The program then filters out tasks that are marked as done and displays them in the console. If there are no completed tasks, it shows a motivational message instead.

## Features 🚀

| Feature            | Description                                                                                                           |
| ------------------ | --------------------------------------------------------------------------------------------------------------------- |
| Add New Tasks      | Users can add up to three new tasks: title 🏷️, description 🖊️, and status ✅                                         |
| Status Validation  | Only accepts `todo`, `doing`, or `done`                                                                               |
| Unique IDs         | Each new task receives a unique incremental ID                                                                        |
| Task Limit Warning | Alerts users when task limit is reached: ⚠️ "There are enough tasks on your board, please check them in the console." |
| Console Logging    | Logs all tasks 🗂️ and completed tasks ✅ with clear labels and emojis                                                 |


<div align="left">
  <img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
</div>
9
##  Technologies Used 📂

| Technology | Purpose                                        |
| ---------- | ---------------------------------------------- |
| HTML       | Basic page structure                           |
| JavaScript | Logic for task management, prompts, validation |
| CSS       | Styles web page layout                    |

##  What I Learned 🧠

| Concept          | Description                                                                     |
| ---------------- | ------------------------------------------------------------------------------- |
| Arrays & Objects | Storing tasks as structured objects inside arrays                               |
| Functions        | Using functions to validate input and filter completed tasks                    |
| IDs  | Assigning unique IDs automatically for new tasks                                |
| Console Logging  | Clear, structured display of tasks and completed tasks                          |
| Code Quality     | Writing readable, manageable code with meaningful variable names and comments |

## How to Run the Project 🛠 

| Step | Action                                                                                                                 |
| ---- | ---------------------------------------------------------------------------------------------------------------------- |
| 1    | Clone the repository or download the project ZIP                                                                       |
| 2    | Open the `index.html` or `script.js` file in a modern web browser                                                      |
| 3    | Follow the prompts to add tasks                                                                                        |
| 4    | Open the browser console to view all tasks and completed tasks (`Ctrl+Shift+I` or right-click > Inspect > Console tab) |

## Example Console Output 💻 

| Output Type           | Example                                                                                               |
| --------------------- | ----------------------------------------------------------------------------------------------------- |
| All Tasks 🗂️         | 1. \[todo]  - Finish project report<br>2. \[doing] - Update resume<br>3. \[done]  - Submit assignment |
| Completed Tasks ✅     | 3. \[done] - Submit assignment                                                                        |
| Task Limit Reached ⚠️ | "There are enough tasks on your board, please check them in the console."                             |




