import ElementWriter from "../ElementWriter";


export default function headerFactory() {

    const headerElement = document.createElement('header');
    
    ElementWriter.write(headerElement, 'Todo List')

    return {
        headerElement
    }
}
