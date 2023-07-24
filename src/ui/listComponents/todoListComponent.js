export default function todoListComponent() {

    const ul = document.createElement('ul');

    function addItem(todo) {
        console.log()
        console.log(todo);
        const item = TodoItemComponent(todo.title, todo.description, todo.date);
        ul.appendChild(item);
    }

    function updateList(todos) {
        clear();
        for(let i = 0; i < todos.length; i++) {
            let todo = todos[i];
            addItem(todo);
        }
    }

    function clear() {
        while(ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
    }
    
    return {
        getListElement() {
            return ul;
        },
        updateList,
    }
}

function TodoItemComponent(id, title, description, date) {
    const STYLE = 'todo';
    const listItem = document.createElement('li');
    listItem.classList.add(STYLE);
    listItem.classList.add('corner');

    const titleElement = document.createElement('p');
    titleElement.textContent = title;

    const dateElement = document.createElement('p');
    dateElement.textContent = date;

    listItem.append(titleElement, dateElement);

    return listItem;
}