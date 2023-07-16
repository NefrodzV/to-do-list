import factoryLocalStorage from "../storage/factoryLocalStorage";
const projectRepository = (() => {
    
    const localStorage = factoryLocalStorage();
    let data = [];
    
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
    
    update();
    console.log(data);
    return {
        addProject, 
        getAllProjects
    }
})();
   
export default projectRepository;

