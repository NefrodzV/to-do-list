export default function addTodosFactory() {

    const form = document.createElement('form');
    form.classList.add('project-form');

    const todosTitle = document.createElement('h2');
    todosTitle.textContent  = 'Register Todos';

    const addTodoButton = document.createElement('button');
    addTodoButton.textContent = '+ ADD TODO';

    const todoTitleInput = createInput('Title','text', 'todoTitle');

    const todoDateInput = createInput('Date', 'date', 'todoDate');

    const todoDescription = document.createElement('textarea');
    todoDescription.rows = 4;
    todoDescription.columns = 50;
    todoDescription.placeholder = 'Write a description';
    
    const todosContainer = document.createElement('div');

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';

    todosTitle.append(addTodoButton);

    form.append(todosTitle, todoTitleInput, todoDateInput ,todoDescription ,todosContainer, submitButton);

    function createInput(placeHolderText, inputType, inputName) {
        const input = document.createElement('input');
        input.placeholder = placeHolderText;
        input.type = inputType;
        input.name = inputName;
        return input;
    }

    return form;

}