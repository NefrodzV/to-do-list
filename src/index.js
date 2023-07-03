import  './style.css';
import footerFactory from './views/footerElement';



import headerFactory from './views/headerFactory';
import mainFactory from './views/mainFactory';
import sidebarFactory from './views/sideBarFactory';

const header = headerFactory();
const sideBar = sidebarFactory();
const main = mainFactory();
const footer = footerFactory();


document.body.appendChild(header.headerElement);
document.body.appendChild(sideBar.sideBarElement);
document.body.appendChild(main.mainElement);
document.body.appendChild(footer.footerElement);
