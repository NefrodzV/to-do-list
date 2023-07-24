export default function Transform() {

    function replaceElement(oldElement, elementType, type, value, updateFunction) {
        console.log("transform function running");
        const element = document.createElement(elementType);
        element.type = type;
        element.value = value;
        
        element.addEventListener('keypress', (event) => {
            
            if(event.key === "Enter"){
                event.preventDefault();
                console.log("Enter pressed");
                updateFunction()
                console.log(element.value);
                oldElement.textContent = element.value;
                undoTransform(oldElement, element);
            }
        })

        element.addEventListener('focusout', (event)  => {
            console.log("input lost focus");
            undoTransform(oldElement, element);

        })

        oldElement.replaceWith(element);
        element.focus();
    }

    function undoTransform(oldElement, newElement) {
        newElement.replaceWith(oldElement);
    } 

    return {
        replaceElement, 
        undoTransform
    }
    
}