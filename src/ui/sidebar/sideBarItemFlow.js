import events from "../../events";
import layerFactory from "../layerFactory";

export default function sidebarItemFlow(id) {

    switch (id) {
        case 'inbox':
            
            break;
        case 'upcoming':

            break;
        case 'today':

            break;
        case 'create':
            events.emit('updateLayerVisibility');
            break;
    
        default:
            console.log('UH OH sidebar clicks error');
            break;
    }
}