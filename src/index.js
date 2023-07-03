import  './style.css';



import headerFactory from './views/headerFactory';

const header = headerFactory();



document.body.appendChild(header.headerElement);