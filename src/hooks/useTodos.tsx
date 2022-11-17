import { useState } from "react"
import { Todos } from "../types"
import { useLocalStorage } from "./useLocalStorage"

export function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    synchronize: syncTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", [])
  const [searchValue, setSearchValue] = useState("")
  const [openModal, setOpenModal] = useState(false)

  const completedTodos = todos.filter((todo) => !!todo.completed).length
  const totalTodos = todos.length

  let searchedTodos: Todos[] = []

  if (searchValue.length >= 1) {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLocaleLowerCase()
      const searchText = searchValue.toLocaleLowerCase()
      return todoText.includes(searchText)
    })
  }

  if (searchValue.length === 0) {
    searchedTodos = todos
  }

  const completeTodo = (text: string) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text)
    const newTodos = [...todos]
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed

    saveTodos(newTodos)
  }

  const deleteTodo = (text: string) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)

    saveTodos(newTodos)
  }

  const addTodo = (text: string) => {
    const newTodos = [...todos]
    newTodos.push({
      completed: false,
      text: text,
    })

    saveTodos(newTodos)
  }

  return {
    error,
    loading,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    addTodo,
    syncTodos,
  }
}
