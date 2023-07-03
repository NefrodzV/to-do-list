import '../style.css'
export default function sidebarFactory() {
    
    const sideBarElement = document.createElement('div');
    sideBarElement.classList.add('sidebar');

    return {
        sideBarElement
    }
}