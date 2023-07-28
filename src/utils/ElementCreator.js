import getSystemDate from "./getSystemDate";

export default function ElementCreator() {
    const createLegend = (text) => {
        const element = document.createElement('legend');
        element.textContent = text;
        return element;
    }

    const createTextarea = (rows, placeholder, name) => {
        const element = document.createElement('textarea');
        element.rows = rows;
        element.placeholder = placeholder;
        element.name = name;
        element.id = name;
        return element;
    }

    const createLabel = (text, inputId) => {
        const element = document.createElement('label');
        element.textContent = text;
        element.htmlFor = inputId;
        return element;
    }

    const createInput = (type, placeholderText, name)  => {
        const element = document.createElement('input');
        element.type = type;
        element.placeholder = placeholderText;
        element.name = name;
        element.id = name;
        element.max = 20;

        if(type === 'date') {
            element.min = getSystemDate();
        }
        return element;
    }

    const createButton = (type, text, style) => {
        const element = document.createElement('button');
        element.textContent = text;
        element.classList.add(style);
        element.type = type;
        return element;
    }
    return {
        createLegend,
        createTextarea,
        createLabel,
        createInput,
        createButton
    }
}