export default function createProject(id, title, description, todos) {
    
    
    // const setId = (id) => {
    //     id = id;
    // }
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
    return {
        toJSON,
        getId,
        getDescription,
        getTitle, 
        getTodos
    }
}