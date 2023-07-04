import '../../style.css';
import inboxPNG from '../../asset/icon-inbox.png';
import sidebarItems from './sidebarItems';
export default function sidebarFactory() {
    
    const sideBarElement = document.createElement('div');
    sideBarElement.classList.add('sidebar');

    const title = document.createElement('h2');
    title.textContent = "Projects";
    title.classList.add('uppercase');
    sideBarElement.appendChild(title);
    
    const items = sidebarItems;
    
    for(let i = 0; i < items.length; i++) {
        let item = items[i];
        sideBarElement.appendChild(item);
    }
    
    return sideBarElement;
    
}