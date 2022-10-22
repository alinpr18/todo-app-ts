import TodoCounter from "./components/TodoCounter/TodoCounter"
import TodoSearch from "./components/TodoSearch/TodoSearch"
import TodoList from "./components/TodoList/TodoList"
import TodoItem from "./components/TodoItem/TodoItem"
import CreateTodoButton from "./components/CreateTodoButton/CreateTodoButton"
import uuid from "react-uuid"
import { TodoContext } from "./context/TodoContext"
import { useContext } from "react"

function AppUI() {
  const appContext = useContext(TodoContext)

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {appContext?.error && <p>Hubo un error...</p>}
        {appContext?.loading && <p>Estamos cargado, por favor espera</p>}
        {!appContext?.loading && !appContext?.searchedTodos.length && (
          <p>Crea tu primer ToDo</p>
        )}
        {appContext?.searchedTodos.map((todo) => (
          <TodoItem
            key={uuid()}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => appContext?.completeTodo(todo.text)}
            onDelete={() => appContext?.deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  )
}

export default AppUI
