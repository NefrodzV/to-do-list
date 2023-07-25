import projectRepository from "../../data/repository/projectRepository";
import events from "../../events";
import Transform from "../../utils/Transform";
import todoListComponent from "../listComponents/todoListComponent";

export default function projectDetails(closeFunction) {

    const transform = Transform();

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
    title.addEventListener('click', () => {
        transform.replaceElement(title, 'input','text', project.getTitle(), (value) => {
            project.setTitle(value);
            update(title, project.getTitle());
            updateProject();
            events.emit('updateProjectList', projectRepository.getAllProjects());
        })
    })
    const description = document.createElement('p');
    description.classList.add('layer-description');
    description.addEventListener('click', () => {
        transform.replaceElement(description, 'input','text', project.getDescription(), (value) => {
            project.setDescription(value);
            update(description, project.getDescription());
            updateProject();
            
        })
    })

    const todosListComponent = todoListComponent();

    const addTodoButton = document.createElement('button');
    addTodoButton.classList.add('add-todo-button');
    addTodoButton.textContent = '+ Add Todo';
    addTodoButton.addEventListener('click', () => {
        todosListComponent.addInputComponent();
    });

    function update(target, value) {
        target.textContent = value;
    }
    function updateFields() {
        title.textContent = project.getTitle();
        description.textContent = project.getDescription();
        todosListComponent.updateList(project.getTodos());
    }
    function getDataFromSource(id) {
        project = projectRepository.getProjectWithId(id);
        console.log(project);
        updateFields();
    }
    
    function addTodoToProject(todo) {
        project.addTodo(todo);
        updateProject();
    }
    events.on('addTodo', addTodoToProject);
    events.on('updateProjectDetails', getDataFromSource);

    function updateProject() {
        projectRepository.updateProject(project);
    }
    
    events.on('updateProject', updateProject);

    container.append(closeButton, title, description, todosListComponent.getListElement(), addTodoButton);

    return container;
}