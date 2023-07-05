

export default function addProjectFormFactory() {

    const formContainer = document.createElement('div');

    const form = document.createElement('form');
    form.classList.add('project-form');

  
    const formTitle = document.createElement('h1');
    formTitle.textContent = "REGISTER PROJECT";
    const titleInput = createInput('TITLE');

    const dueInput = createInput('DUE DATE');

    const descriptionInput = createInput('DESCRIPTION');

    const addTodoButton = createButton('+ ADD TODO');
    const addImageContainer = document.createElement('div');

    const todosTitle = document.createElement('h2');
    todosTitle.textContent  = 'TODOS';

    const todosContainer = document.createElement('div');

    const submitButton = createButton('SUBMIT');

    todosTitle.append(addTodoButton);
    form.append(formTitle, titleInput, dueInput, descriptionInput, todosTitle, todosContainer, submitButton);
    formContainer.append(form);

    function createInput(placeHolderText) {
        const input = document.createElement('input');
        input.placeholder = placeHolderText;


        return input;
    }

    function createButton(title) {
        const button = document.createElement('button');
        button.textContent = title;

        return button;
    }

    return form;

}