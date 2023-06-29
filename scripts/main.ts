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

//addTaskという名前の関数を定義し、イベントオブジェクトを引数として受け取る
const addTask = (event: Event) => {
  //イベントのデフォルトの動作をキャンセルする
  //フォームの送信イベントのデフォルトの動作をキャンセルすることで、ページがリロードされるnのを防ぐ
  event.preventDefault();
  //指定された各IDを取得
  const container = document.getElementById("task-container");
  const taskList = document.getElementById("task-list") as HTMLUListElement;
  const completedList = document.getElementById(
    "completed-list"
  ) as HTMLUListElement;
  const input = document.getElementById("taskInput") as HTMLInputElement;
  //input要素の値を取得し、両側の空白を除去してtaskName変数に格納する
  const taskName = input.value.trim();

  //taskNameが空文字列ではないかどうかをチェック
  if (taskName !== "") {
    //新しいli要素を作成し、taskItem変数に格納
    const taskItem = document.createElement("li");
    //新しいinput要素を作成し、そのタイプを "checkbox" に設定
    //チェックボックスを作成するために使用される
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    //新しいlabel要素を作成し、その中にcheckbox要素とタスク名のテキストノードを追加
    const label = document.createElement("label");
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(taskName));
    taskItem.appendChild(label);

    //taskItemに作成したlabel要素を追加
    checkbox.addEventListener("change", (event) => {
      const targetCheckbox = event.target as HTMLInputElement;
      const taskItem = targetCheckbox.parentElement?.parentElement;
      if (taskItem) {
        if (targetCheckbox.checked) {
          taskList.removeChild(taskItem);
          completedList.appendChild(taskItem);
        } else {
          completedList.removeChild(taskItem);
          taskList.appendChild(taskItem);
        }
      }
    });

    taskList.appendChild(taskItem);
    //taskItem.innerHTML = `<label><input class="task" type="checkbox">${taskName}</label>`;

    //if (taskList) {
    //taskList.appendChild(taskItem);
    // }

    input.value = "";
  }
};
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", addTask);
}
