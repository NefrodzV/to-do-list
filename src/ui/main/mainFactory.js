import events from "../../events";
import layerFactory from "../layer/layerFactory";
import inboxFactory from "./inboxFactory";

export default function mainFactory() {

    const mainElement = document.createElement('main');
    const layer = layerFactory();
    
    //Will only run once for when loading page
    (() => {
        mainElement.appendChild(inboxFactory());
        mainElement.appendChild(layer.layerElement);
    })();
    
    function update(element) {
        removeElements();
        layer.disableLayer();
        mainElement.appendChild(element);
        mainElement.appendChild(layer.layerElement);
    }

    // Used to communicate when menu items are clicked
    // events.on('updateMain', update);
   
    function removeElements() {
        while(mainElement.firstChild) {
            mainElement.removeChild(mainElement.firstChild);
        }
    }
    
    return mainElement;
}