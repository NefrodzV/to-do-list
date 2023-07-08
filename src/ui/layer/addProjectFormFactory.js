

export default function addProjectFormFactory() {

    const form = document.createElement('form');
    form.classList.add('project-form');

    const formTitle = document.createElement('h1');
    formTitle.textContent = "REGISTER PROJECT";

    const title = document.createElement('h2');
    title.textContent = 'PROJECT DETAILS'

    const titleInput = createInput('Project Title ', 'text', 'title');

    const dateInput = createInput('DUE DATE', 'date', 'date');

    const descriptionInput = createTextarea(50, 3);

    const addTodoButton = createButton('+ ADD TODO');
    
    const todosTitle = document.createElement('h2');
    todosTitle.textContent  = 'Register Todos';

    const todoTitleInput = createInput('Title','text', 'todoTitle');

    const todoDateInput = createInput('Due date', 'date', 'todoDate');

    const todoDescription = document.createElement('textarea');
    todoDescription.rows = 3;
    todoDescription.columns = 50;
    todoDescription.placeholder = 'Write a description of what you are doing';
    
    const todosContainer = document.createElement('div');

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';

    todosTitle.append(addTodoButton);
    form.append(formTitle, title, titleInput, dateInput, descriptionInput, todosTitle, todoTitleInput, todoDateInput, todoDescription, todosContainer, submitButton);
    

    function createInput(placeHolderText, inputType, inputName) {
        const input = document.createElement('input');
        input.placeholder = placeHolderText;
        input.type = inputType;
        input.name = inputName;
        return input;
    }

    function createButton(title) {
        const button = document.createElement('button');
        button.textContent = title;
        return button;
    }

    function createTextarea(col, row) {
        const textarea = document.createElement('textarea');
        textarea.columns = col;
        textarea.rows = row;
        textarea.placeholder = 'Write a description of what you are doing';
        return textarea;
    }

    
    return form;

}