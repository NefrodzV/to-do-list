export default function createTodo(title, description, date, completeState = false) {
    
    return {
        title,
        description,
        date,
        completeState
    }
}