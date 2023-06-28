/*const addTask = (event: SubmitEvent) => {
  event.preventDefault();
  const container = document.getElementById("task-container");
  const taskList = document.getElementById("task-list");

  const input = document.getElementById("taskInput") as HTMLInputElement;

  //const inputValue = form.elements.namedItem("task") as HTMLInputElement;

  const taskInputTemplate = `<label><input class="task" type="checkbox">${input.value}</input></label>`;

  //if (container) {
  taskList.insertAdjacentHTML("beforeend", taskInputTemplate);
  //}

  input.value = "";
};*/

const container = document.getElementById("task-container");
const taskList = document.getElementById("task-list");

const addTask = (event: Event) => {
  event.preventDefault();

  const input = document.getElementById("taskInput") as HTMLInputElement;
  const taskName = input.value;

  if (taskName.trim() !== "") {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `<label><input class="task" type="checkbox">${taskName}</label>`;

    if (taskList) {
      taskList.appendChild(taskItem);
    }

    input.value = "";
  }
};

const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", addTask);
}
