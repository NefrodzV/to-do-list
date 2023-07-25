import createTodo from "../../data/model/createTodo";
import events from "../../events";
import Transform from "../../utils/Transform";

export default function todoListComponent() {

    let hasInputComponent = false;

    const ul = document.createElement('ul');
    
    ul.classList.add('layer-list');
    
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

    })
    
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
    dateElement.style.marginInlineStart = 'auto';
    dateElement.addEventListener('click', () => {
        transform.replaceElement(dateElement, 'input', "date" , todo.getTitle(),  (value) => {
            todo.setDate(value);
            update(dateElement, todo.getDate());
            events.emit('updateProject');
        })
    })
    
    dateElement.textContent = todo.getDate();

    const checkBoxElement = document.createElement('input');
    checkBoxElement.type = 'checkbox';
    checkBoxElement.classList.add('todo-checkbox');
    checkBoxElement.checked = todo.getCompleteState();
    checkBoxElement.addEventListener('click', () => {
        console.log('checkbox value is:' + checkBoxElement.checked);
        todo.updateCompleteState(checkBoxElement.checked);
        events.emit('updateProject');
    })
    
    const mainItemContainer = document.createElement('div');
    mainItemContainer.classList.add('todo-main-container');
    mainItemContainer.append(titleElement, dateElement, checkBoxElement);

    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('todo-description');
    descriptionContainer.textContent = todo.getDescription();

    listItem.append(mainItemContainer, descriptionContainer);

    function update(target, value) {
        target.textContent = value;
    }

    return listItem;
}

