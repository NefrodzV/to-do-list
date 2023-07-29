import "../../style.css";
import sidebarListComponent from "./sidebarListComponent";
export default function sidebarFactory() {
  const sideBarElement = document.createElement("div");
  sideBarElement.classList.add("sidebar");

  const title = document.createElement("h2");
  title.textContent = "Menu";
  title.classList.add("uppercase");

  const nav = document.createElement("nav");

  nav.appendChild(sidebarListComponent());

  sideBarElement.append(title, nav);

  return sideBarElement;
}
