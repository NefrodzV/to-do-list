import factoryLocalStorage from "../storage/factoryLocalStorage";
const projectRepository = (() => {
    
    let data = [];

    const localStorage = factoryLocalStorage();

    const update = () => {
        data = localStorage.getAll();
    }

    const addProject = (project) => {
        localStorage.add(project);
        update();
    }

    const getAllProjects = () => {
        return data;
    }

    return {
        addProject, 
        getAllProjects
    }
})();
   
export default projectRepository;

