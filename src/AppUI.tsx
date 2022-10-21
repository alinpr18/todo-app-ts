import TodoCounter from "./components/TodoCounter/TodoCounter"
import TodoSearch from "./components/TodoSearch/TodoSearch"
import TodoList from "./components/TodoList/TodoList"
import TodoItem from "./components/TodoItem/TodoItem"
import CreateTodoButton from "./components/CreateTodoButton/CreateTodoButton"
import uuid from "react-uuid"
import { Todos } from "./types"

interface Props {
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

function AppUI({
  error,
  loading,
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
}: Props) {
  return (
    <>
      <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {error && <p>Hubo un error...</p>}
        {loading && <p>Estamos cargado, por favor espera</p>}
        {!loading && !searchedTodos.length && <p>Crea tu primer ToDo</p>}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={uuid()}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  )
}

export default AppUI
