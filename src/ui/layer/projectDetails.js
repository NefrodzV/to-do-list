import events from "../../events";
import todoListComponent from "../listComponents/todoListComponent";


export default function projectDetails(closeFunction) {
    
    const CONTAINER_STYLE = 'layer-container';

    const container = document.createElement('div');
    container.classList.add(CONTAINER_STYLE);
    const closeButton = document.createElement('button');
    closeButton.classList.add('close-button');
    closeButton.textContent = "X";
    closeButton.addEventListener('click', () => {
        closeFunction();
    });

    const title = document.createElement('h2');
    title.textContent = "Project title";
    const description = document.createElement('h4');
    description.textContent = 'project description';

    const todosListComponent = todoListComponent();

    container.append(closeButton, title, description, todosListComponent);

    return container;
}