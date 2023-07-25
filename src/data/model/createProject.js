export default function createProject(id, title, description, todos) {
    
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
    return {
        toJSON,
        getId,
        getDescription,
        getTitle, 
        getTodos,
        setTitle(value) {title = value;},
        setDescription(value) {description = value;},
        addTodo
    }
}