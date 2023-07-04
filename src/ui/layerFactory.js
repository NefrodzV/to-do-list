import events from "../events";

export default function layerFactory() {

    const LAYER_STYLE = 'layer';

    const layerElement = document.createElement('div');
    layerElement.classList.add(LAYER_STYLE);

    const toggleVisiibility = () => {
        layerElement.toggleAttribute('visible');
    }

    events.on('updateLayerVisibility', toggleVisiibility);

    return layerElement; 
}