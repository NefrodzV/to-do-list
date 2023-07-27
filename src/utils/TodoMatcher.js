export function TodoMatcher() {
    function findTodoByTitle(todo, array) {
        for(let i = 0; i < array.length; i++) {
            if(todo.getTitle() === array[i].getTitle()) {
                console.log('Found a match index is' + i);
                return i;
            }
        }
        return null;
    }

    return {
        findTodoByTitle
    }
}