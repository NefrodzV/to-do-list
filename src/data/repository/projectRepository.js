import events from "../../events";
import factoryLocalStorage from "../storage/factoryLocalStorage";
const projectRepository = (() => {
    
    const localStorage = factoryLocalStorage();
    let data = [];
    
    const update = () => {
        data = localStorage.getAll();
        events.emit('updateProjectList', data);
    }

    const addProject = (project) => {
        localStorage.add(project);
        update();
    }

    const getAllProjects = () => {
        return data;
    }
    
    update();
    
    return {
        addProject, 
        getAllProjects
    }

    
})();
   
export default projectRepository;

