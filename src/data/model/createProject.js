import CompleteTodosCounter from "../../utils/CompleteTodoCounter"
import Sorter from "../../utils/Sorter"
import { TodoMatcher } from "../../utils/TodoMatcher"

export default function createProject(id, title, description, todos) {
  const getCompletedTodosTotal = () => {
    let completed = CompleteTodosCounter().getTotal(todos)
    let total = todos.length
    return `${completed}/${total}`
  }
  const getId = () => {
    return id
  }

  const getTitle = () => {
    return title
  }

  const getDescription = () => {
    return description
  }

  const getTodos = () => {
    if (todos.length > 1) {
      Sorter().sortByDate(todos)
    }
    return todos
  }

  // For serializing
  const getObject = () => {
    return { id, title, description, todos }
  }
  const toJSON = () => {
    return getObject()
  }
  const addTodo = (todo) => {
    todos.push(todo)
  }

  const deleteTodo = (todo) => {
    let indexMatch = TodoMatcher().findTodoByTitle(todo, todos)
    if (indexMatch === null) return
    todos.splice(indexMatch, 1)
  }

  return {
    toJSON,
    getId,
    getDescription,
    getTitle,
    getTodos,
    setTitle(value) {
      title = value
    },
    setDescription(value) {
      description = value
    },
    addTodo,
    deleteTodo,
    getCompletedTodosTotal,
  }
}
