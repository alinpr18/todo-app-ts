import { createContext, SetStateAction, useState } from "react"
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
  openModal: boolean
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  addTodo: (text: string) => void
}

const TodoProviderDefault: TodoContextInterface = {
  error: false,
  loading: false,
  totalTodos: 0,
  completedTodos: 0,
  searchValue: "",
  setSearchValue: function (value: SetStateAction<string>): void {
    throw new Error("Function not implemented.")
  },
  searchedTodos: [],
  completeTodo: function (text: string): void {
    throw new Error("Function not implemented.")
  },
  deleteTodo: function (text: string): void {
    throw new Error("Function not implemented.")
  },
  openModal: false,
  setOpenModal: function (value: SetStateAction<boolean>): void {
    throw new Error("Function not implemented.")
  },
  addTodo: function (text: string): void {
    throw new Error("Function not implemented.")
  },
}

const TodoContext = createContext<TodoContextInterface>(TodoProviderDefault)

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
  const [openModal, setOpenModal] = useState(false)

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

  const addTodo = (text: string) => {
    const newTodos = [...todos]
    newTodos.push({
      completed: false,
      text: text,
    })

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
        openModal,
        setOpenModal,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }
