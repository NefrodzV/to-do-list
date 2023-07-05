export default function addProjectFormFactory() {

    const formContainer = document.createElement('div');

    const form = document.createElement('form');

    const titleInput = createInput();

    const dueInput = createInput();

    const descriptionInput = createInput();

    const addTodoButton = createButton('+ ADD TODO');
    const addImageContainer = document.createElement('div');

    const todosTitle = document.createElement('h2');
    todosTitle.textContent  = 'TODOS';

    const todosContainer = document.createElement('div');

    const submitButton = createButton('SUBMIT');

    todosTitle.append(addTodoButton);

    form.append(titleInput, dueInput, descriptionInput, todosTitle, todosContainer, submitButton);
    formContainer.append(form);

    const createInput = () => {
        const input = document.createElement('input');


        return input;
    }

    const createButton = (title) => {
        const button = document.createElement('button');
        button.textContent = title;

        return button;
    }

    return form;

}