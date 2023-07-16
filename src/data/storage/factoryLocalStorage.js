export default function factoryLocalStorage() {
    const storage = window['localStorage'];
    
    const addToStorage = (project) => {
        let projectJSON = JSON.stringify(project);
        let index = storage.length;

        storage.setItem(index, projectJSON);
    }
    
    const getAll = () => {
        const projects = [];
        for(let i = 0; i < storage.length; i++) {
            let project = storage[i];
            projects.push(project);
        }
        return projects;
    }

    return {
        addToStorage, 
        getAll
    }
}