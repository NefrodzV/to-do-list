import events from "../../events";
import createProject from "../model/createProject";
import factoryLocalStorage from "../storage/factoryLocalStorage";
const projectRepository = (() => {
  const localStorage = factoryLocalStorage();
  let data = [];

  const update = () => {
    data = localStorage.getAll();
    events.emit("updateProjectList", data);
  };

  const addProject = (title, description, todos) => {
    let id = localStorage.getLastId();
    let project = createProject(id, title, description, todos);
    localStorage.add(project);
    update();
  };

  const getAllProjects = () => {
    update();
    return data;
  };

  const getProjectWithId = (id) => {
    return localStorage.getProjectWithId(id);
  };

  const updateProject = (project) => {
    localStorage.updateProject(project);
    console.log("Updating project");
  };

  const removeProject = (identifier) => {
    localStorage.removeProject(identifier);
  };

  update();

  return {
    addProject,
    getAllProjects,
    getProjectWithId,
    updateProject,
    removeProject,
  };
})();

export default projectRepository;
