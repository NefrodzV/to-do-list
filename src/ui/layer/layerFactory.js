import events from "../../events";
import addProjectFormFactory from "./addProjectFormFactory";
import addTodosFactory from "./addTodosFactory";
import formNavFactory from "./formNavFactory";

export default function layerFactory() {

    const LAYER_STYLE = 'layer';
    const CONTAINER_STYLE = 'layer-container';

    const layerElement = document.createElement('div');
    layerElement.classList.add(LAYER_STYLE);

    
    const toggleVisibility = () => {layerElement.toggleAttribute('visible');}

    const closeButton = document.createElement('button');
    closeButton.textContent = "X";
    closeButton.addEventListener('click',toggleVisibility);
    
    const navigation = formNavFactory();

    const container = document.createElement('div');
    container.classList.add(CONTAINER_STYLE);
    container.classList.add('corner');

    // Need to change this dynamically with a nav
    const form = addProjectFormFactory();
    
    
    

    

    container.appendChild(closeButton);
    container.append(navigation)
    container.appendChild(form);
    layerElement.appendChild(container);
    events.on('updateLayerVisibility', toggleVisibility);

    return layerElement; 
}