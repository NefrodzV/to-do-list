import  './style.css';
import footerFactory from './ui/footerFactory';
import headerFactory from './ui/headerFactory';
import mainFactory from './ui/main/mainFactory';
import sidebarFactory from './ui/sidebar/sidebarFactory';

const header = headerFactory();
const main = mainFactory();
const sideBar = sidebarFactory();

const footer = footerFactory();


document.body.appendChild(header);
document.body.appendChild(sideBar);
document.body.appendChild(main);
document.body.appendChild(footer);



