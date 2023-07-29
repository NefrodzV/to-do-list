export default function formListComponent(todos, itemCallback) {
  const ul = document.createElement("ul");

  // initializer if there is something in the todos array
  (() => {
    if (todos.length === 0 || todos === null) return;
    for (let i = 0; i < todos.length; i++) {
      let todo = todos[i];
      updateList(todo);
    }
  })();

  function updateList(todo) {
    const item = formItemComponent(
      todo.getTitle(),
      todo.getDate(),
      itemCallback
    );
    ul.appendChild(item);
  }

  function clear() {
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
  }

  return {
    getListElement() {
      return ul;
    },
    updateList,
    clear,
  };
}

function formItemComponent(title, date, itemCallback) {
  const STYLE = "todo";
  const listItem = document.createElement("li");
  listItem.classList.add(STYLE);
  listItem.classList.add("corner");

  const formTitleElement = document.createElement("p");
  formTitleElement.textContent = title;

  const formDateElement = document.createElement("p");
  formDateElement.textContent = date;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.type = "button";
  deleteButton.addEventListener("click", () => {
    itemCallback(title);
    listItem.remove();
  });

  listItem.append(formTitleElement, formDateElement, deleteButton);
  return listItem;
}
