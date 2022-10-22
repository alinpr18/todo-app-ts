import { createContext, useState } from "react"
import useLocalStorage from "../hooks/useLocalStorage"
import { Todos } from "../types"

interface TodoContextInterface {
  error: boolean
  loading: boolean
  totalTodos: number
  completedTodos: number
  searchValue: string
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
  searchedTodos: Todos
  completeTodo: (text: string) => void
  deleteTodo: (text: string) => void
}

const TodoContext = createContext<TodoContextInterface | null>(null)

interface Props {
  children: React.ReactNode
}

function TodoProvider({ children }: Props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", [])
  const [searchValue, setSearchValue] = useState("")

  const completedTodos = todos.filter((todo) => !!todo.completed).length
  const totalTodos = todos.length

  let searchedTodos: Todos = []

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

  return (
    <TodoContext.Provider
      value={{
        error,
        loading,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }
