import event from './events';
import  './style.css';
import footerFactory from './ui/footerFactory';
import headerFactory from './ui/headerFactory';
import layerFactory from './ui/layer/layerFactory';
import mainFactory from './ui/mainFactory';
import sidebarFactory from './ui/sidebar/sidebarFactory';

const header = headerFactory();
const sideBar = sidebarFactory();
const main = mainFactory();
const footer = footerFactory();
const layer = layerFactory();

document.body.appendChild(header);
document.body.appendChild(sideBar);
document.body.appendChild(main);
document.body.appendChild(footer);
document.body.appendChild(layer);



