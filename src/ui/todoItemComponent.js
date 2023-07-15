import events from "../events";


export default function todoListComponent(todos, itemCallback) {
    const ul = document.createElement('ul');

    function updateList(title, date) {
        const item = todoItemComponent(title, date, itemCallback);
        ul.appendChild(item);
    }

    return {
        getListElement() {
            return ul;
        },
        updateList
    }
}

function todoItemComponent(title, date, itemCallback) {
    const listItem = document.createElement('li');

    const todoTitleElement = document.createElement('p');
    todoTitleElement.textContent = title;

    const todoDateElement = document.createElement('p');
    todoDateElement.textContent = date;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "X";
    deleteButton.type = 'button';
    deleteButton.addEventListener('click', () => {
        itemCallback(title);
        // listItem.remove()
        
    })

    listItem.append(todoTitleElement, todoDateElement, deleteButton);
    return listItem;
}