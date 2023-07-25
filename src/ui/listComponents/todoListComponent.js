import Transform from "../../utils/Transform";

export default function todoListComponent() {

    const ul = document.createElement('ul');
    
    function addItem(todo) {
        console.log()
        console.log(todo);
        const item = TodoItemComponent(todo);
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

function TodoItemComponent(todo) {
    
    const transform = Transform();

    const STYLE = 'todo-component';
    const listItem = document.createElement('li');
    listItem.classList.add(STYLE);

    const titleElement = document.createElement('p');
    titleElement.textContent = todo.getTitle();
    titleElement.addEventListener('click', (event) => {
        transform.replaceElement(titleElement, 'input', "text" , todo.getTitle(), () => {
            console.log("update the todo property");
            // todo.setTitle(value);
            // console.log(todo);
        })
    })

    const dateElement = document.createElement('p');
    
    dateElement.textContent = todo.getDate();

    listItem.append(titleElement, dateElement);

    return listItem;
}