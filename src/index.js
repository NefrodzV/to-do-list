import  './style.css';
import footerFactory from './ui/footerFactory';
import headerFactory from './ui/headerFactory';
import mainFactory from './ui/mainFactory';
import sidebarFactory from './ui/sidebar/sidebarFactory';

const header = headerFactory();
const sideBar = sidebarFactory();
const main = mainFactory();
const footer = footerFactory();


document.body.appendChild(header);
document.body.appendChild(sideBar.sideBarElement);
document.body.appendChild(main.mainElement);
document.body.appendChild(footer.footerElement);


