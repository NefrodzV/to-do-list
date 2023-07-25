export default function Transform() {

    function replaceElement(oldElement, elementType, type, value, callback) {
        
        
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
            undoTransform(newElement, oldElement);
        });
    
        oldElement.replaceWith(newElement);
        newElement.focus();
    }

    function undoTransform(newElement, oldElement) {
        newElement.replaceWith(oldElement);
    } 

    return {
        replaceElement
    }
    
}