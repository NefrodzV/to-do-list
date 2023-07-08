import events from "../../events";

export default function formNavFactory() {
    
    const navigation = document.createElement('nav');

    const navList = document.createElement('ul');
    navList.classList.add('form-nav');
    navigation.appendChild(navList);
    
    const todoItem = formNavItemFactory('REGISTER TODO');
    todoItem.toggleSelectedAttr();

    const projectItem = formNavItemFactory('REGISTER PROJECT');

    events.on('updateFormNav', function() {
        todoItem.disableSelectedAttr()
        projectItem.disableSelectedAttr();
    });

    navList.append(todoItem.item, projectItem.item);

    return navigation;
}

function formNavItemFactory(text) {
    const item = document.createElement('li');
    item.textContent = text;

    const toggleSelectedAttr = () => {
        item.toggleAttribute('selected');
    }

    item.addEventListener('click', () => {
        if(itemIsSelected()) {
            console.log(text + "item is already selected");
            return;
        }
        events.emit('updateFormNav');
        toggleSelectedAttr()
        events.emit('updateForm', text);
    });

    const disableSelectedAttr = () => {
        item.removeAttribute('selected');
    }

    const itemIsSelected = () => {
        return item.hasAttribute('selected');
    }
    
    return {
        item, 
        toggleSelectedAttr,
        disableSelectedAttr
    };
}