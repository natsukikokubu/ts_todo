const handleClick = (arg: string | number | boolean) => {
  if (typeof arg === "string") {
    alert("文字列ボタンがクリックされました");
  } else if (typeof arg === "number") {
    alert("数字ボタンがクリックされました");
  } else if (typeof arg === "boolean") {
    alert("真偽値ボタンがクリックされました");
  }
};

const form = document.getElementById("sample-form");

// formが取得できるかは不明なのでoptional
form?.addEventListener("submit", (e) => {
  // submitイベントをキャンセルすることで、ページがリフレッシュされることを防ぐ
  e.preventDefault();

  // FormDataインスタンスを生成して、formの中身を取得する
  // e.targetは必ずHTMLFormElementなのでassertionする
  const formData = new FormData(e.target as HTMLFormElement);
  const todo = formData.get("todo");
  console.log(todo);
});
