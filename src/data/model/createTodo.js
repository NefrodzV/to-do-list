export default function createTodo(title, description, date = 'No date set', completeState = false) {
    
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
        getCompleteState() {return completeState;},
        setTitle(value){title = value;},
        setDescription(value) {description = value;},
        setDate(value) {date = value;},
        updateCompleteState(boolean) {completeState = boolean;}
    }
}