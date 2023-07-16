import factoryLocalStorage from "../storage/factoryLocalStorage";
export default projectRepository = (() => {

    const data = [];

    const localStorage = factoryLocalStorage();

    const update = () => {
        data = localStorage.getAll();
    }
    const addProject = (project) => {
        localStorage.addToStorage(project);
        update();
    }

    const getAllProjects = () => {
        return data;
    }
})();