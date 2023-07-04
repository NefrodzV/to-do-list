export default function layerFactory() {

    const LAYER_STYLE = 'layer';

    const layerElement = document.createElement('div');
    layerElement.classList.add('layer');

    return layerElement; 
}