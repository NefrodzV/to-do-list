import projectRepository from "../../data/repository/projectRepository";
import projectListComponent from "../listComponents/projectListComponent";
import events from "../../events";
export default function inboxFactory() {

    const container = document.createElement('div');
    const contentHeader = document.createElement('h2');
    contentHeader.classList.add('list-header');
    contentHeader.textContent = 'Inbox'; 

    const listComponent = projectListComponent(projectRepository.getAllProjects(), (id) => {
        console.log('item id clicked is: ' + id)
        console.log('view project data flow');
        events.emit('updateLayerVisibility');
        events.emit('updateProjectDetails', id);
    });

    const projectList = listComponent.getList();

    container.append(contentHeader, projectList);

    return container;
}