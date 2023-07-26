export default function createProject(id, title, description, todos) {
    
    const getCompletedTodosTotal = () => {
        let counter = 0;
        for(let i = 0; i < todos.length; i++) {
            console.log(todos[i])
            if(todos[i].getCompleteState()) {
                counter++;
            }
        }

        return `${counter}/${todos.length}`;
    }
    const getId = () => { return id; }

    const getTitle = () => {return title;}

    const getDescription = () => {
        return description;
    }

    const getTodos = () => {
        return todos;
    }
    
    // For serializing
    const getObject = () => {
        return { id, title, description, todos};
    }
    const toJSON = () => {
        return getObject();
    }
    const addTodo = (todo) => {
        todos.push(todo);
    }

    const deleteTodo = (todo) => {
        console.log('deleting todo');
        for(let i = 0; i < todos.length; i++) {
            if(todo.getTitle() === todos[i].getTitle()) {
                console.log('found a match deleting');
                todos.splice(i, 1);
            }
        }
    }

    return {
        toJSON,
        getId,
        getDescription,
        getTitle, 
        getTodos,
        setTitle(value) {title = value;},
        setDescription(value) {description = value;},
        addTodo,
        deleteTodo,
        getCompletedTodosTotal
    }
}