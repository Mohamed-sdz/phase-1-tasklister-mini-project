document.addEventListener("DOMContentLoaded", () => {
  const taskList = document.querySelector("#task-list");
  const taskInput = document.querySelector("#task-input");
  const addTaskBtn = document.querySelector("#add-task-btn");

  addTaskBtn.addEventListener("click", () => {
    const newTask = document.createElement("li");
    newTask.innerText = taskInput.value;
    taskList.appendChild(newTask);
    taskInput.value = "";
  });

  taskList.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      event.target.remove();
    }
  });

   
     
  
  // your code here
});
const name = " Mohamed"; // replace with your name
const championNode = document.createElement("div");
championNode.innerHTML = `${name} is the <strong>champion</strong>`;
