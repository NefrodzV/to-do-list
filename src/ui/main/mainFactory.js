import events from "../../events";

export default function mainFactory() {

    const mainElement = document.createElement('main');
    
    function update(element) {
        removeElements();

        mainElement.appendChild(element);
    }

    // Used to communicate when menu items are clicked
    events.on('updateMain', update);

    function removeElements() {
        while(mainElement.firstChild) {
            mainElement.removeChild(mainElement.firstChild);
        }
    }
    return mainElement;
}