


export default function headerFactory() {

    const headerElement = document.createElement('header');

    const title = document.createElement('h1');
    title.textContent = "Todo List"
    
    headerElement.appendChild(title);
    return {
        headerElement
    }
}
