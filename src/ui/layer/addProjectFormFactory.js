

export default function addProjectFormFactory() {

    const createLegend = (text) => {
        const element = document.createElement('legend');
        element.textContent = text;
        return element;
    }

    const createLabel = (text, inputId) => {
        const element = document.createElement('label');
        element.textContent = text;
        element.htmlFor = inputId;
        return element;
    }

    const createInput = (type, placeholderText, name)  => {
        const element = document.createElement('input');
        element.type = type;
        element.placeholder = placeholderText;
        element.name = name;
        element.id = name;
        return element;
    }

    const createTextarea = (rows, placeholder, name) => {
        const element = document.createElement('textarea');
        element.rows = rows;
        element.placeholder = placeholder;
        element.name = name;
        element.id = name;
        return element;
    }

    const form = document.createElement('form');
    form.classList.add('project-form');

    const formTitle = document.createElement('h1');
    formTitle.textContent = "REGISTER PROJECT";

    // Project details form part
    const projectFieldset = document.createElement('fieldset');
    const projectLegend = createLegend('Project details');
    
    const projectTitleLabel = createLabel('Project title:', 'projectTitle');
    
    const projectTitleInput = createInput('text', 'Title', 'projectTitle');
    
    const projectDescriptionLabel = createLabel('Project description:', 'projectDescription')
    
    const projectDescriptionTextarea = createTextarea(3, 'What is the project about?', 'projectDescription');

    projectFieldset.append(projectLegend, projectTitleLabel,projectTitleInput, projectDescriptionLabel, projectDescriptionTextarea)
    
    // Todo items form part
    const todoFieldset = document.createElement('fieldset');

    const addTodoButton = document.createElement('button')
    addTodoButton.classList.add('add-todo-button');
    addTodoButton.textContent = '+ ADD TODO';
    addTodoButton.type = 'button';

    const todoLegend = createLegend('Register todos');
    
    const todoTitleLabel = createLabel('Title:', 'todoTitle');
    
    const todoTitleInput = createInput('text', 'Title', 'todoTitle')
    
    const todoDateLabel = createLabel('Date:', 'date');
    
    const todoDateInput = createInput('date', null, 'date');
    
    const todoDescriptionLabel = createLabel('Description:', 'todoDescription');
   
    const todoDescriptionTextarea = createTextarea(3, 'Write a description for the todo!', 'todoDescription');
    
    todoFieldset.append(todoLegend, todoTitleLabel, todoTitleInput, todoDateLabel, todoDateInput, todoDescriptionLabel, todoDescriptionTextarea, addTodoButton);
    const todoListFieldset = document.createElement('fieldset');
    const todoListLegend = document.createElement('legend');
    todoListLegend.textContent = 'Todo List'
    
    const todosList = document.createElement('ul');
    todosList.classList.add('todos-form-list');
   
    const emptyListSpan = document.createElement('span')
    emptyListSpan.textContent = 'There are no todos!';

    emptyListSpan.classList.add('empty-list-msg');

    todosList.appendChild(emptyListSpan);

    todoListFieldset.appendChild(todoListLegend);
    todoListFieldset.appendChild(todosList);
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';  

    form.append(formTitle, projectFieldset, todoFieldset, todoListFieldset, submitButton);

    return form;

}