import events from "../../events";
import addProjectFormFactory from "./addProjectFormFactory";


export default function layerFactory() {

    const LAYER_STYLE = 'layer';
    const CONTAINER_STYLE = 'layer-container';

    const layerElement = document.createElement('div');
    layerElement.classList.add(LAYER_STYLE);

    const toggleVisibility = () => {layerElement.toggleAttribute('visible');}

    const closeButton = document.createElement('button');
    closeButton.textContent = "X";
    closeButton.addEventListener('click',toggleVisibility);
    
    const container = document.createElement('div');
    container.classList.add(CONTAINER_STYLE);
    container.classList.add('corner');

    let form = addProjectFormFactory();
    container.appendChild(closeButton);
    container.appendChild(form);
    layerElement.appendChild(container);

    events.on('updateLayerVisibility', toggleVisibility);

    return layerElement; 
}