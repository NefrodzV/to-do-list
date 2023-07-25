import events from "../../events";
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

    // TODO: Update the todo in the project class and local storage.
    const titleElement = document.createElement('p');
    titleElement.textContent = todo.getTitle();
    titleElement.addEventListener('click', () => {
        transform.replaceElement(titleElement, 'input', "text" , todo.getTitle(), (value) => {
            todo.setTitle(value);
            update(titleElement, todo.getTitle());
            events.emit('updateProject');
        })
    })
    
    const dateElement = document.createElement('p');
    dateElement.addEventListener('click', () => {
        transform.replaceElement(dateElement, 'input', "date" , todo.getTitle(), (value) => {
            todo.setDate(value);
            update(dateElement, todo.getDate());
            events.emit('updateProject');
        })
    })
    
    dateElement.textContent = todo.getDate();

    listItem.append(titleElement, dateElement);

    function update(target, value) {
        target.textContent = value;
    }

    return listItem;
}