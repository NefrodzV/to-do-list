import createProject from "../model/createProject";
import createTodo from "../model/createTodo";

export default function factoryLocalStorage() {
    const storage = window['localStorage'];
    
    const add = (project) => {
        let index = storage.length;
        
        console.log(index)
        
        let projectJSON = JSON.stringify(project);
        
        storage.setItem(index, projectJSON);
    
    }

    // storage.clear();
    const getAll = () => {
        const projects = [];
        for(let i = 0; i < storage.length; i++) {
            let projectJson = storage[i];
            let obj = JSON.parse(projectJson);
            console.log(storage);
            let project = createProject(obj.id, obj.title, obj.description, obj.todos);
           
            projects.push(project);
        }
        return projects;
    }

    const getProjectWithId = (id) => {
        let projectJSON = storage.getItem(id);
        let obj = JSON.parse(projectJSON);
        
        let todos = [];
        for(let i = 0; i < obj.todos.length; i++) {
            let todoObj = obj.todos[i];
            let todo = createTodo(todoObj.title, todoObj.description, todoObj.date, todoObj.completeState);
            todos.push(todo);
        }

        let project = createProject(obj.id, obj.title, obj.description, todos);
        return project;
    }

    const getLastId = () => {
        return storage.length;
    }

    return {
        add, 
        getAll,
        getLastId,
        getProjectWithId
    }
}