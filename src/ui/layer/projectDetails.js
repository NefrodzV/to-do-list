import projectRepository from "../../data/repository/projectRepository";
import events from "../../events";
import todoListComponent from "../listComponents/todoListComponent";

export default function projectDetails(closeFunction) {

    let project;
    
    const CONTAINER_STYLE = 'layer-container';

    const container = document.createElement('div');
    container.classList.add(CONTAINER_STYLE);

    const closeButton = document.createElement('button');
    closeButton.classList.add('close-button');
    closeButton.textContent = "X";
    closeButton.addEventListener('click', () => {
        closeFunction();
    });

    const title = document.createElement('p');
    title.classList.add('layer-title');
    title.textContent = "Project title";
    const description = document.createElement('p');
    description.classList.add('layer-description');
    description.textContent = 'project description';

    const todosListComponent = todoListComponent();

    function update() {
        title.textContent = project.getTitle();
        description.textContent = project.getDescription();
        todosListComponent.updateList(project.getTodos());
    }
    function getDataFromSource(id) {
        project = projectRepository.getProjectWithId(id);
        console.log(project);
        update();
    }
    
    events.on('updateProjectDetails', getDataFromSource);

    container.append(closeButton, title, description, todosListComponent.getListElement());

    return container;
}