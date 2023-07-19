
export default function todoListComponent(todos, itemCallback) {
    
    const ul = document.createElement('ul');

    // initializer if there is something in the todos array
    (() => {
        if(todos.length === 0 || todos === null) return;
        for(let i = 0; i < todos.length; i++) {
            let todo = todos[i];
            updateList(todo);
        }
    })();

    function updateList(todo) {
        const item = todoItemComponent(todo.getTitle(),  todo.getDate(), itemCallback);
        ul.appendChild(item);
    }

    return {
        getListElement() {
            return ul;
        },
        updateList,
    }
}

function todoItemComponent(title, date, itemCallback) {
    const STYLE = 'todo';
    const listItem = document.createElement('li');
    listItem.classList.add(STYLE);
    listItem.classList.add('corner');

    const todoTitleElement = document.createElement('p');
    todoTitleElement.textContent = title;

    const todoDateElement = document.createElement('p');
    todoDateElement.textContent = date;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "X";
    deleteButton.type = 'button';
    deleteButton.addEventListener('click', () => {
        itemCallback(title);
        listItem.remove()
        
    })

    listItem.append(todoTitleElement, todoDateElement, deleteButton);
    return listItem;
}