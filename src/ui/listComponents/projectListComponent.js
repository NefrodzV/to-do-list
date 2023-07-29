import events from "../../events"

export default function projectListComponent(projects, itemCallback) {
  const STYLE = "project-list"
  const ul = document.createElement("ul")
  ul.classList.add(STYLE)
  ;(() => {
    if (projects.length === 0 || projects === null) return
    for (let i = 0; i < projects.length; i++) {
      let item = projects[i]
      addItem(item)
    }
  })()

  function addItem(project) {
    const item = projectItemComponent(project, itemCallback)
    ul.appendChild(item)
  }

  function removeItems() {
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild)
    }
  }

  function updateList(projects) {
    removeItems()
    for (let i = 0; i < projects.length; i++) {
      let project = projects[i]
      addItem(project)
    }
  }

  events.on("updateProjectList", updateList)
  console.log(events)

  return {
    getList() {
      return ul
    },
  }
}

function projectItemComponent(project, itemCallback) {
  const STYLE = "project"

  const listItem = document.createElement("li")
  listItem.classList.add(STYLE)
  listItem.addEventListener("click", () => {
    itemCallback(project.getId())
  })

  const titlePara = document.createElement("p")
  titlePara.textContent = project.getTitle()
  titlePara.classList.add("project-title")

  const completionSpan = document.createElement("span")
  completionSpan.textContent = project.getCompletedTodosTotal()

  listItem.append(titlePara, completionSpan)

  return listItem
}
