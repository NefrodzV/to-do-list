import events from "../../events";

export default function formNavFactory() {
    
    const navigation = document.createElement('nav');

    const navList = document.createElement('ul');
    navList.classList.add('form-nav');
    navigation.appendChild(navList);
    
    
    const todoItem = formNavItemFactory('TODO');
    const projectItem = formNavItemFactory('PROJECT');
    events.on('updateFormNav', function() {
        todoItem.removeAttribute('selected') ;
        projectItem.removeAttribute('selected');
    })
    navList.append(todoItem, projectItem);

    return navigation;
}

function formNavItemFactory(text) {
    const item = document.createElement('li');
    item.textContent = text;

    const toggleSelectAttr = () => {
        item.toggleAttribute('selected');
    }

    item.addEventListener('click', () => {
        events.emit('updateFormNav');
        toggleSelectAttr()
    })
    
    return item;
}