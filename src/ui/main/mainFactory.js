import events from "../../events";
import layerFactory from "../layer/layerFactory";
import inboxFactory from "./inboxFactory";

export default function mainFactory() {

    const mainElement = document.createElement('main');
    const layer = layerFactory();
    
    //Will only run once for when loading page
    (() => {
        mainElement.appendChild(inboxFactory());
        mainElement.appendChild(layer);
    })();
    
    function update(element) {
        removeElements();
        mainElement.appendChild(element);
        mainElement.appendChild(layer);
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