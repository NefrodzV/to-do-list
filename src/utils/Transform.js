export default function Transform() {

    let oldElement;
    

    function replaceElement(element, elementType, type, value, callback) {
        oldElement = element;
        
        const newElement = document.createElement(elementType);
        newElement.type = type;
        newElement.value = value;
        
        newElement.addEventListener('keypress', (event) => {
            if(event.key === "Enter"){
                event.preventDefault();
                callback(newElement.value);
                event.target.blur();
            }
        });

        newElement.addEventListener('focusout', (event) => {
            undoTransform(newElement);
        });
    
        oldElement.replaceWith(newElement);
        newElement.focus();
    }

    function undoTransform(newElement) {
        newElement.replaceWith(oldElement);
    } 

    return {
        replaceElement, 
        undoTransform
    }
    
}