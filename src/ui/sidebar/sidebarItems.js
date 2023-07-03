import inboxPNG from '../../asset/icon-inbox.png';

function sidebarItemFactory(icon, title) {
    const STYLE = 'sidebar-item';
    const ICON_CONTAINER_STYLE = 'sidebar-item-container';

    const sidebarItemElement = document.createElement('div');
    sidebarItemElement.classList.add(STYLE);

    const itemIcon = new Image();
    itemIcon.src = inboxPNG;
    
    const iconContainer = document.createElement('div');
    iconContainer.appendChild(itemIcon);
    iconContainer.classList.add(ICON_CONTAINER_STYLE);

    const titleElement = document.createElement('h3');
    titleElement.textContent = title;
    titleElement.classList.add('uppercase');

    

    const itemCounterElement = document.createElement('h3');
    itemCounterElement.textContent = 23;
    itemCounterElement.classList.add('item-counter');

    sidebarItemElement.append(iconContainer, titleElement, itemCounterElement)
    
    return {
        sidebarItemElement
    }
}

const sidebarItems = [];

const inboxItem = sidebarItemFactory(inboxPNG, 'inbox');
sidebarItems.push(inboxItem);

export default sidebarItems;