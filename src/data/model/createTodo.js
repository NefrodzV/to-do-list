export default function createTodo(title, description, date, completeState = false) {
    
    const getObject = () => {
        return {
            title,
            description,
            date,
            completeState
        }
    }

    const toJSON = () => {return getObject(); }
    return {
        toJSON,
        getTitle() {return title;},
        getDescription() {return description;},
        getDate() {return date;},
        getCompletitionState() {return completeState;}
    }
}