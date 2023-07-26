import createTodo from "../../data/model/createTodo";
import events from "../../events";
import Transform from "../../utils/Transform";
import deleteIcon from "../../asset/icon-delete.png";

export default function todoListComponent() {

    let hasInputComponent = false;

    const ul = document.createElement('ul');
    
    ul.classList.add('layer-list');
    
    function addItem(todo) {
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

    function addInputComponent() {
        if(hasInputComponent)  return;
        let inputComponent = InputItemComponent()
        ul.appendChild(inputComponent.li);
        inputComponent.setFocus();
    }

    // Class
    function InputItemComponent() {
        hasInputComponent = true;
        const li = document.createElement('li');
        li.classList.add('todo-component');
        
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = "Enter title";
        
        input.addEventListener('keypress', (event) => {
            if(event.key === "Enter"){
                let todo = createTodo(input.value);
                events.emit('addTodo', todo);
                addItem(todo);
                events.emit('updateProject');
                event.preventDefault();
                event.target.blur();
            }
        });

        input.addEventListener('focusout', () => {
            hasInputComponent = false;
            li.remove();
        })
        li.appendChild(input)
        input.focus();
        return {
            li,
            setFocus () {
                input.focus();
            }
        };
    }
    return {
        getListElement() {
            return ul;
        },
        updateList,
        addInputComponent
    }
}

function TodoItemComponent(todo) {
    
    const transform = Transform();

    const STYLE = 'todo-component';
    const listItem = document.createElement('li');
    listItem.classList.add(STYLE);

    listItem.addEventListener('click', () => {
        console.log('clickpressed');
        deleteButton.toggleAttribute('visible');
    })
    

    const titleElement = document.createElement('p');
    titleElement.textContent = todo.getTitle();
    titleElement.classList.add('todo-component-title');
    titleElement.addEventListener('click', () => {
        transform.replaceElement(titleElement, 'input', "text" , todo.getTitle(), (value) => {
            todo.setTitle(value);
            update(titleElement, todo.getTitle());
            events.emit('updateProject');
        })
    });

    const dateElement = document.createElement('p');
    dateElement.classList.add('todo-component-date');    
    dateElement.textContent = todo.getDate();

    dateElement.addEventListener('click', () => {
        transform.replaceElement(dateElement, 'input', "date" , todo.getTitle(),  (value) => {
            todo.setDate(value);
            update(dateElement, todo.getDate());
            events.emit('updateProject');
        })
    })
    

    const checkBoxElement = document.createElement('input');
    checkBoxElement.type = 'checkbox';
    checkBoxElement.classList.add('todo-checkbox');
    checkBoxElement.checked = todo.getCompleteState();
    checkBoxElement.addEventListener('click', () => {
        console.log('checkbox value is:' + checkBoxElement.checked);
        todo.updateCompleteState(checkBoxElement.checked);
        events.emit('updateProject');
    })
    
    const deleteButton = document.createElement('button');
    const deleteImage = new Image();
    deleteImage.src = deleteIcon;
    const container = document.createElement('div');
    container.appendChild(deleteImage);
    deleteButton.appendChild(container);
    deleteButton.classList.add('delete-item-button');
    deleteButton.addEventListener('click', () => {
        events.emit('deleteTodo', todo);
        listItem.remove();
    })

    const mainItemContainer = document.createElement('div');
    mainItemContainer.classList.add('todo-main-container');
    mainItemContainer.append(titleElement, dateElement, checkBoxElement, deleteButton);

    const todoDescription = document.createElement('p');
    todoDescription.classList.add('todo-component-description');
    todoDescription.textContent = todo.getDescription();

    listItem.addEventListener('contextmenu', (event) => {
        event.preventDefault();
        transform.replaceElement(todoDescription, 'input', 'text', todo.getDescription(), (value) => {
            todo.setDescription(value);
            events.emit('updateProject');
            update(todoDescription, value);
        });
    });
    listItem.append(mainItemContainer, todoDescription);

    function update(target, value) {
        target.textContent = value;
    }


    return listItem;
}

