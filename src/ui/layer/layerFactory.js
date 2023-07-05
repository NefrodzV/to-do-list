import events from "../../events";

export default function layerFactory() {

    const LAYER_STYLE = 'layer';
    const CONTAINER_STYLE = 'layer-container';

    const layerElement = document.createElement('div');
    layerElement.classList.add(LAYER_STYLE);

    const closeButton = document.createElement('button');
    closeButton.textContent = "X";

    const container = document.createElement('div');
    container.classList.add(CONTAINER_STYLE);

    container.appendChild(closeButton);
    layerElement.appendChild(container);
    
    
    const toggleVisibility = () => {
        layerElement.toggleAttribute('visible');
    }

    toggleVisibility();
    const updateContainerElements = () => {
        
    }

    events.on('updateLayerVisibility', toggleVisibility);

    return layerElement; 
}