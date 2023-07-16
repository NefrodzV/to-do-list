export default function factoryLocalStorage() {
    const storage = window['localStorage'];
    
    const add = (project) => {
        let index = storage.length;
        project.id = index;
        
        let projectJSON = JSON.stringify(project);
        
        storage.setItem(index, projectJSON);
        console.log(storage);

    }

    
    const getAll = () => {
        const projects = [];
        for(let i = 0; i < storage.length; i++) {
            let projectJson = storage[i];
            let project = JSON.parse(projectJson);
            projects.push(project);
        }
        return projects;
    }

    return {
        add, 
        getAll
    }
}