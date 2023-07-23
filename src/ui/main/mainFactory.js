import events from "../../events";
import inboxFactory from "./inboxFactory";

export default function mainFactory() {

    const mainElement = document.createElement('main');
    //Will only run once for when loading page
    (() => {
        mainElement.appendChild(inboxFactory());
    })();
    
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