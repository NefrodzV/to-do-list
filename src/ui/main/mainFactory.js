import projectRepository from "../../data/repository/projectRepository";
import projectListComponent from "../listComponents/projectListComponent";


export default function mainFactory() {

    const mainElement = document.createElement('main');
    const listComponent = projectListComponent(projectRepository.getAllProjects(), (id) => {
        console.log('item id clicked is: ' + id)
        console.log('view project data flow');
    })
    const projectList = listComponent.getList();
    
    mainElement.appendChild(projectList);
    
    return mainElement;
}