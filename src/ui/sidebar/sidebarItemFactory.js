import events from "../../events";
export default function sidebarItemFactory(
  icon,
  title,
  elementFactory,
  isActive
) {
  const STYLE = "sidebar-item";
  const ICON_CONTAINER_STYLE = "sidebar-item-container";
  const sidebarItemElement = document.createElement("li");
  sidebarItemElement.classList.add(STYLE);
  sidebarItemElement.setAttribute("id", title);

  sidebarItemElement.addEventListener("click", function (e) {
    if (isActive) return;

    events.emit("sidebarItemClicked");
    toggleIsActive();
    events.emit("updateMain", elementFactory);
  });

  if (isActive) {
    toggleIsActive();
  }

  const itemIcon = new Image();
  itemIcon.src = icon;

  const iconContainer = document.createElement("div");
  iconContainer.appendChild(itemIcon);
  iconContainer.classList.add(ICON_CONTAINER_STYLE);

  const titleElement = document.createElement("h3");
  titleElement.textContent = title;
  titleElement.classList.add("item-title");

  sidebarItemElement.append(iconContainer, titleElement);

  function toggleIsActive() {
    isActive = true;
    sidebarItemElement.toggleAttribute("isActive");
  }

  function disableActive() {
    isActive = false;
    sidebarItemElement.removeAttribute("isActive");
  }

  return {
    getElement() {
      return sidebarItemElement;
    },
    disableActive,
  };
}
