import ElementWriter from "../ElementWriter";


export default function headerFactory() {

    const headerElement = document.createElement('header');
    const title = document.createElement('h1');
    ElementWriter.write(title, 'Todo List');
    
    headerElement.appendChild(title);
    return {
        headerElement
    }
}
