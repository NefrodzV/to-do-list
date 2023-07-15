export default function createTodo(title, description, date, completeState = false) {

    const getTitle  = ()  =>{
        return title;
    }

    const getDescription = () => {
        return description;
    }

    const getDate = () => {
        return date;
    } 

    const getCompleteState = () => {
        return completeState;
    }
    
    return {
        getTitle, 
        getDescription,
        getDate,
        getCompleteState
    }
}