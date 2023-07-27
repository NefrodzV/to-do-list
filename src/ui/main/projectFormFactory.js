import events from "../../events";
import createTodo from "../../data/model/createTodo";
import inputValidator from "../layer/inputValidator";
import projectRepository from "../../data/repository/projectRepository";
import formListComponent from "../listComponents/formListComponent";

export default function projectFormFactory() {
    let errorField = false;
    const inputs = [];
    const todosData = [];

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
        element.max = 20;
        inputs.push(element);
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
    
    const listComponent = formListComponent(todosData, (title) => {
       removeFromTodosData(title);
    });

    const todosList = listComponent.getListElement();

    todosList.classList.add('todos-form-list');
    
    todoListFieldset.appendChild(todoListLegend);
    todoListFieldset.appendChild(todosList);
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';  

    const fieldsetContainer = document.createElement('div');
    fieldsetContainer.classList.add('fieldset-container');
    fieldsetContainer.append(projectFieldset, todoFieldset, todoListFieldset);

    form.append(formTitle, fieldsetContainer, submitButton);

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

        // Reseting form
        resetInputText(projectTitleInput);
        resetInputText(projectDescriptionTextarea);
        resetInputText(todoTitleInput);
        resetInputText(todoDescriptionTextarea);
        resetInputText(todoDateInput);  
        listComponent.clear();
        todosData.length = 0
    }
      
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
        for(let i = 0;i < todosData.length; i++) {
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