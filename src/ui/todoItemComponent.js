import events from "../events";

export default function todoItemComponent(title, date) {
    const container = document.createElement('li');

    const todoTitleElement = document.createElement('p');
    todoTitleElement.textContent = title;

    const todoDateElement = document.createElement('p');
    todoDateElement.textContent = date;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "X";
    deleteButton.addEventListener('click', () => {
        container.remove()
        
    })

    container.append(todoTitleElement, todoDateElement, deleteButton);
    return container;
}