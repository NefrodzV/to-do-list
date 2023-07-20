import inboxPNG from '../../asset/icon-inbox.png';
import upcomingPNG from '../../asset/icon-upcoming.png';
import todayPNG from '../../asset/icon-today.png';
import addPGN from '../../asset/icon-add.png';
import inboxFactory from '../main/inboxFactory';
import events from '../../events';
import addProjectFormFactory from '../layer/addProjectFormFactory';


function sidebarItemFactory(icon, title, elementFactory, isActive) {
    const STYLE = 'sidebar-item';
    const ICON_CONTAINER_STYLE = 'sidebar-item-container';

    const sidebarItemElement = document.createElement('div');
    sidebarItemElement.classList.add(STYLE);
    sidebarItemElement.setAttribute('id', title);
    
    sidebarItemElement.addEventListener('click', function(e) {
        if(isActive) return;
        toggleIsActive();
            events.emit('updateMain', elementFactory);
            // sidebarItemFlow(title);
    });

    const itemIcon = new Image();
    itemIcon.src = icon;
    
    const iconContainer = document.createElement('div');
    iconContainer.appendChild(itemIcon);
    iconContainer.classList.add(ICON_CONTAINER_STYLE);

    const titleElement = document.createElement('h3');
    titleElement.textContent = title;
    titleElement.classList.add('item-title');

    sidebarItemElement.append(iconContainer, titleElement);

    function toggleIsActive() {
        sidebarItemElement.toggleAttribute('isActive');
    }

    
    
    return sidebarItemElement 
}

const sidebarItems = [];

const inboxItem = sidebarItemFactory(inboxPNG, 'inbox', inboxFactory(), true);
sidebarItems.push(inboxItem);

const upcomingItem = sidebarItemFactory(upcomingPNG, 'upcoming');
sidebarItems.push(upcomingItem);

const todayItem = sidebarItemFactory(todayPNG, 'today');
sidebarItems.push(todayItem);

const addItem = sidebarItemFactory(addPGN, 'create', addProjectFormFactory());
sidebarItems.push(addItem);

export default sidebarItems;