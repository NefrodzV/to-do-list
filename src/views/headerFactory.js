import ElementWriter from "../ElementWriter";


export default function headerFactory() {

    const headerElement = document.createElement('header');
    
    ElementWriter.write(headerElement, 'Todo List')

    return {
        headerElement
    }
}

function cardFactory(title, description) {
    const cardElement = document.createElement('div');
    cardElement.textContent = title;

    return {
        cardElement,
        title,
        description
    }
}