import sidebarItemsFactory from "./sidebarItemsFactory"

import events from "../../events"

export default function sidebarListComponent() {
  const sidebarItems = sidebarItemsFactory()

  const ul = document.createElement("ul")

  ;(() => {
    if (
      !Array.isArray(sidebarItems) ||
      sidebarItems.length === 0 ||
      sidebarItems === null
    )
      return
    updateList()
  })()

  function addItem(item) {
    ul.appendChild(item)
  }

  function updateList() {
    for (let i = 0; i < sidebarItems.length; i++) {
      let sidebarItem = sidebarItems[i]
      addItem(sidebarItem.getElement())
    }
  }

  function disableActiveItems() {
    sidebarItems.forEach((item) => {
      item.disableActive()
    })
  }

  events.on("sidebarItemClicked", disableActiveItems)

  return ul
}
