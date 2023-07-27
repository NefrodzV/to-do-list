import Formatter from "../../utils/Formatter";

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
    getDate() {
            if(date === 'No date set') return date;
            return Formatter().formatDate(date);
        },
        getCompleteState() {return completeState;},
        setTitle(value){title = value;},
        setDescription(value) {description = value;},
        setDate(value) {date = value;},
        updateCompleteState(boolean) {completeState = boolean;}
    }
}