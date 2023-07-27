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

    const controlsContainer =  document.createElement('div');
    controlsContainer.classList.add('controls-container');

    
    const addTodoButton = document.createElement('button');
    addTodoButton.classList.add('layer-add-todo-button');
    addTodoButton.textContent = '+ Add Todo';
    addTodoButton.addEventListener('click', () => {
        todosListComponent.addInputComponent();
        
    });

    const deleteTodoButton = document.createElement('button');
    deleteTodoButton.textContent = "Delete";
    deleteTodoButton.classList.add('layer-delete-button');
    deleteTodoButton.addEventListener('click', () => {
        closeFunction()
        projectRepository.removeProject(project.getId());
        events.emit('updateProjectList', projectRepository.getAllProjects());
    })

    controlsContainer.append(addTodoButton, deleteTodoButton);

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
    events.on('updateProjectDetails', getDataFromSource);

    function addTodoToProject(todo) {
        project.addTodo(todo);
        updateProject();
    }
    events.on('addTodo', addTodoToProject);
    
    function updateProject() {
        projectRepository.updateProject(project);
        events.emit('updateProjectList', projectRepository.getAllProjects());
    }
    events.on('updateProject', updateProject);

    function deleteTodo(todo) {
        project.deleteTodo(todo);
        updateProject();
    }
    events.on('deleteTodo', deleteTodo);

    container.append(closeButton, title, description, todosListComponent.getListElement(), controlsContainer);

    return container;
}