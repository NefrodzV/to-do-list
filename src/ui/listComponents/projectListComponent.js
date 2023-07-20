import events from "../../events";

export default function projectListComponent(projects, itemCallback) {
    

    const STYLE = 'project-list';
    const ul = document.createElement('ul');
    ul.classList.add(STYLE);

    (() => {
        if(projects.length === 0 || projects === null) return;
        for(let i = 0; i < projects.length; i++) {
            let item = projects[i];
            addItem(item);
        }
    })();

    function addItem(project) {
        const item = projectItemComponent(project.getId(), project.getTitle(), itemCallback);
        ul.appendChild(item);
    }

    function removeItems() {
        while(ul.firstChild) {
            ul.removeChild(ul.firstChild)
        }
    }

    function updateList(projects) {
        removeItems();
        for(let i = 0; i < projects.length; i++) {
            let project = projects[i];
            addItem(project);
        }
    }

    events.on('updateProjectList', updateList);
    console.log(events);

    return {
        getList() {
            return ul;
        }
    }
}

function projectItemComponent(id, title, itemCallback) {
    const STYLE = 'project';

    const listItem = document.createElement('li');
    listItem.classList.add(STYLE);
    listItem.addEventListener('click', () => {
        itemCallback(id);
    })

    const titlePara = document.createElement('p');
    titlePara.textContent = title;
    titlePara.classList.add('project-title');

    const completionSpan = document.createElement('span');
    completionSpan.textContent = '8/12';

    listItem.append(titlePara, completionSpan);

    return listItem;
}