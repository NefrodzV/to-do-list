

export default function addProjectFormFactory() {

    const form = document.createElement('form');
    form.classList.add('project-form');

    const formTitle = document.createElement('h1');
    formTitle.textContent = "REGISTER PROJECT";

    // Project details form part
    const projectFieldset = document.createElement('fieldset');
    const projectLegend = document.createElement('legend');
    projectLegend.textContent = 'Project details';

    const projectTitleLabel = document.createElement('label');
    projectTitleLabel.textContent = 'Project title:';

    const projectTitleInput = document.createElement('input');
    projectTitleInput.type = 'text';
    projectTitleInput.placeholder = 'Title';
    projectTitleInput.name = 'projectTitle';

    const projectDescriptionLabel = document.createElement('label');
    projectDescriptionLabel.textContent = 'Project description:';

    const projectDescriptionTextarea = document.createElement('textarea');
    projectDescriptionTextarea.rows = 3;
    projectDescriptionTextarea.placeholder = "What is the project about?";

    projectFieldset.append(projectLegend, projectTitleLabel,projectTitleInput, projectDescriptionLabel, projectDescriptionTextarea)
    
    // Todo items form part
    const todoFieldset = document.createElement('fieldset');

    const addTodoButton = document.createElement('button')
    addTodoButton.classList.add('add-todo-button');
    addTodoButton.textContent = '+ ADD TODO';
    addTodoButton.type = 'button';

    const todoLegend = document.createElement('legend');
    todoLegend.textContent = 'Register todos'

    const todoTitleLabel = document.createElement('label');
    todoTitleLabel.textContent = 'Title:';

    const todoTitleInput = document.createElement('input');
    todoTitleInput.type = 'text';
    todoTitleInput.placeholder = 'Title';
    todoTitleInput.name = 'todoTitle';

    const todoDateLabel = document.createElement('label');
    todoDateLabel.textContent = 'Date:';

    const todoDateInput = document.createElement('input');
    todoDateInput.type = 'date';
    todoDateInput.name = 'todoDate';
    
    const todoDescriptionLabel = document.createElement('label');
    todoDescriptionLabel.textContent = 'Description:';

    const todoDescriptionTextarea = document.createElement('textarea');
    todoDescriptionTextarea.rows = 3;
    
    todoDescriptionTextarea.placeholder = 'Write a description of what you are doing';
    
    const listTodoLabel = document.createElement('label');
    listTodoLabel.textContent = 'List of todos:'

    const todosList = document.createElement('ul');
    todosList.classList.add('todos-form-list');
    
    const emptyListSpan = document.createElement('span')
    emptyListSpan.textContent = 'There are no todos!';
    emptyListSpan.classList.add('empty-list-msg');

    todosList.appendChild(emptyListSpan);

    todoFieldset.append(todoLegend, todoTitleLabel, todoTitleInput, todoDateLabel, todoDateInput, todoDescriptionLabel, todoDescriptionTextarea, addTodoButton, listTodoLabel, todosList)

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';  

   
    form.append(formTitle, projectFieldset, todoFieldset, submitButton);
    

    function createInput(placeHolderText, inputType, inputName) {
        const input = document.createElement('input');
        input.placeholder = placeHolderText;
        input.type = inputType;
        input.name = inputName;
        return input;
    }

    return form;

}