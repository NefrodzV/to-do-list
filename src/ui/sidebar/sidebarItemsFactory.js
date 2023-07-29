import inboxPNG from "../../asset/icon-inbox.png";
import addPGN from "../../asset/icon-add.png";
import inboxFactory from "../main/inboxFactory";
import sidebarItemFactory from "./sidebarItemFactory";
import projectFormFactory from "../main/projectFormFactory";

export default function sidebarItemsFactory() {
  const sidebarItems = [
    sidebarItemFactory(inboxPNG, "inbox", inboxFactory(), true),
    sidebarItemFactory(addPGN, "new project", projectFormFactory()),
  ];

  return sidebarItems;
}
