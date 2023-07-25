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
                callback(element.value);
                undoTransform(newElement);
            }
        })

        newElement.addEventListener('focusout', () => {
            if(!document.body.contains(newElement)) return;
            undoTransform(newElement)
        });

        oldElement.replaceWith(newElement);
        newElement.focus();
        console.log(newElement);
    }

    function undoTransform(newElement) {
        newElement.replaceWith(oldElement);
    } 

    return {
        replaceElement, 
        undoTransform
    }
    
}