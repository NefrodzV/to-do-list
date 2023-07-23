import events from "../../events";
import projectDetails from "./projectDetails";



export default function layerFactory() {



    const LAYER_STYLE = 'layer';
    const CONTAINER_STYLE = 'layer-container';

    const layerElement = document.createElement('div');
    layerElement.classList.add(LAYER_STYLE);
    

    const toggleVisibility = () => { layerElement.toggleAttribute('visible'); }
    
    const projectDetail = projectDetails(() => {
        toggleVisibility();
    }); 

    layerElement.appendChild(projectDetail);

    events.on('updateLayerVisibility', toggleVisibility);

    return layerElement; 
}