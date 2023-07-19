import createProject from "../model/createProject";

export default function factoryLocalStorage() {
    const storage = window['localStorage'];
    
    const add = (project) => {
        let index = storage.length;
        project.setId(index);
        
        let projectJSON = JSON.stringify(project);
        
        storage.setItem(index, projectJSON);
        console.log(storage);

    }

    
    const getAll = () => {
        const projects = [];
        for(let i = 0; i < storage.length; i++) {
            let projectJson = storage[i];
            let obj = JSON.parse(projectJson);
            let project = createProject(obj.title, obj.description, obj.todos);
            projects.push(project);
        }
        return projects;
    }

    return {
        add, 
        getAll
    }
}