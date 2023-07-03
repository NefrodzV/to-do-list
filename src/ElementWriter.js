export default class ElementWriter {
    constructor(){

    }

    static write(element, text) {
        element.textContent = text;
    }
}