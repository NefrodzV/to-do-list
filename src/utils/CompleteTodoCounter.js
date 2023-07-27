export default function CompleteTodosCounter() {
    const getTotal = (todos) => {
        let counter = 0;
        for(let i = 0; i < todos.length; i++) {
            if(todos[i].getCompleteState()) {
                counter ++;
            }
        }
        return counter;
    }

    return {
        getTotal
    }
}