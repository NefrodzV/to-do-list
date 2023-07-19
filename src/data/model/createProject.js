export default function createProject(title, description, todos) {
    let id;
    
    const setId = (id) => {
        id = id;
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
        return { title, description, todos};
    }
    const toJSON = () => {
        return getObject();
    }
    return {
        toJSON,
        setId,
        getId,
        getDescription,
        getTitle, 
        getTodos
    }
}