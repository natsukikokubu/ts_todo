const addTask = (event: SubmitEvent) => {
  event.preventDefault();
  const container = document.getElementById("task-container");

  const form = event.target as HTMLFormElement;

  const inputValue = form.elements.namedItem("task") as HTMLInputElement;

  const taskInputTemplate = `<input class="task" type="checkbox">${inputValue.value}</input>`;

  //if (container) {
  container?.insertAdjacentHTML("afterend", taskInputTemplate);
  //}
};
