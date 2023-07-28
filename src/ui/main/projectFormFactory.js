import events from "../../events";
import createTodo from "../../data/model/createTodo";
import inputValidator from "../../utils/inputValidator";
import projectRepository from "../../data/repository/projectRepository";
import formListComponent from "../listComponents/formListComponent";
import ElementCreator from "../../utils/ElementCreator";

export default function projectFormFactory() {
    let errorField = false;
    const todosData = [];

    // Class used to create elements
    const elementCreator = ElementCreator();
     // Displays error when validator finds an error
    const displayInputError = (element) => {
        errorField = true;
        element.value = ''
        element.classList.add('error');
    }

    events.on('displayInputError', displayInputError);

    const form = document.createElement('form');
    form.action = '#';
    form.method = 'post';
    form.classList.add('project-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        errorField = false;
        removeEmptyListMessage();
        console.log("submiting form......");
        validate();
        
    })

    const formTitle = document.createElement('h1');
    formTitle.textContent = "REGISTER PROJECT";

    // Project details form part
    const projectFieldset = document.createElement('fieldset');
    const projectLegend = elementCreator.createLegend('Project details');
    const projectTitleLabel = elementCreator.createLabel('Project title:', 'projectTitle');
    const projectTitleInput = elementCreator.createInput('text', 'Title', 'projectTitle');
    const projectDescriptionLabel = elementCreator.createLabel('Project description:', 'projectDescription')
    const projectDescriptionTextarea = elementCreator.createTextarea(
        3, 'What is the project about?', 'projectDescription');
    projectFieldset.append(projectLegend, projectTitleLabel,projectTitleInput, projectDescriptionLabel, projectDescriptionTextarea)
    
    // Todo items form part
    const todoFieldset = document.createElement('fieldset');
    const addTodoButton = elementCreator.createButton('button', '+ ADD TODO', 'add-todo-button');
    addTodoButton.addEventListener('click', () => {
        errorField = false;
        inputValidator([todoTitleInput, todoDateInput]);
        if(errorField) return;
        removeEmptyListMessage();
        addTodoToList(); 
        resetInputText(todoTitleInput);
        resetInputText(todoDescriptionTextarea);
        resetInputText(todoDateInput);
    });
    const todoLegend = elementCreator.createLegend('Register todos');
    const todoTitleLabel = elementCreator.createLabel('Title:', 'todoTitle');
    const todoTitleInput = elementCreator.createInput('text', 'Title', 'todoTitle')
    const todoDateLabel = elementCreator.createLabel('Date:', 'date');
    const todoDateInput = elementCreator.createInput('date', null, 'date');
    const todoDescriptionLabel = elementCreator.createLabel('Description:', 'todoDescription');
    const todoDescriptionTextarea = elementCreator.createTextarea(
        3, 'Write a description for the todo!', 'todoDescription');
    todoFieldset.append(todoLegend, todoTitleLabel, todoTitleInput, todoDateLabel, todoDateInput, todoDescriptionLabel, todoDescriptionTextarea, addTodoButton);
    
    // Todo List part
    const todoListFieldset = document.createElement('fieldset');
    const todoListLegend = elementCreator.createLegend('Todo List');
    const listComponent = formListComponent(todosData, (title) => {
       removeFromTodosData(title);
    });
    const todosList = listComponent.getListElement();
    todosList.classList.add('todos-form-list');
    todoListFieldset.append(todoListLegend, todosList);
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';  
    const fieldsetContainer = document.createElement('div');
    fieldsetContainer.classList.add('fieldset-container');
    fieldsetContainer.append(projectFieldset, todoFieldset, todoListFieldset);

    form.append(formTitle, fieldsetContainer, submitButton);

    // Functions
    function validate() {
        inputValidator([projectTitleInput]);
        if(!listHasItem()) {
            showEmptyListMessage()
            errorField = true;
        }
        if(errorField) {
            console.log('Error in an input cannot register');
            return;
        }
        submit();

        // Reset form
        resetInputText(projectTitleInput);
        resetInputText(projectDescriptionTextarea);
        resetInputText(todoTitleInput);
        resetInputText(todoDescriptionTextarea);
        resetInputText(todoDateInput);  
        listComponent.clear();
        todosData.length = 0
    }
    
    // Span for empty
    const emptyListSpan = document.createElement('span');
    emptyListSpan.textContent = 'There are no todos! Please add one!';
    emptyListSpan.classList.add('empty-list-msg');

    function showEmptyListMessage() {
        todosList.append(emptyListSpan);
    }
    function removeEmptyListMessage() {
        emptyListSpan.remove();
    }
    function listHasItem() {
        return todosList.hasChildNodes();
    }

    function addTodoToList() {
        let todoTitle = todoTitleInput.value;
        let todoDescription = todoDescriptionTextarea.value;
        let todoDate  = todoDateInput.value;
        
        // Pushing to data array
        let todo = createTodo(todoTitle, todoDescription, todoDate);
        console.log(todo);
        todosData.push(todo);
        // Adding to list component
        listComponent.updateList(todo);
    }

    function resetInputText(input) {
        input.value = "";
        input.classList.remove('error');
    }

    function removeFromTodosData(title) {
        for(let i = 0; i < todosData.length; i++) {
            let todo = todosData[i];
            if(todo.getTitle() === title) {
                todosData.splice(i, 1);
                break;
            }
        }
    }

    function showRegistryMessage() {
        const message = document.createElement('div');
        message.textContent = 'New project registered successful check your inbox!';
        message.classList.add('registry-message');
        form.appendChild(message);

        setTimeout(() => {
            message.remove();
        }, 3000);
    }

    function submit() {
        let title = projectTitleInput.value;
        let description = projectDescriptionTextarea.value;
        projectRepository.addProject(title, description, todosData);
        showRegistryMessage();
    }
    
    return form;

}