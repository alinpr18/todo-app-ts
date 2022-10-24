import TodoCounter from "./components/TodoCounter/TodoCounter"
import TodoSearch from "./components/TodoSearch/TodoSearch"
import TodoList from "./components/TodoList/TodoList"
import TodoItem from "./components/TodoItem/TodoItem"
import CreateTodoButton from "./components/CreateTodoButton/CreateTodoButton"
import uuid from "react-uuid"
import { TodoContext } from "./context/TodoContext"
import { useContext } from "react"
import Modal from "./components/Modal/Modal"
import TodoForm from "./components/TodoForm/TodoForm"
import TodosLoading from "./components/TodosLoading/TodosLoading"
import TodosError from "./components/TodosError/TodosError"
import EmptyTodos from "./components/EmptyTodos/EmptyTodos"

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext)

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error ? (
          <TodosError />
        ) : loading ? (
          <TodosLoading />
        ) : !searchedTodos.length ? (
          <EmptyTodos />
        ) : (
          searchedTodos.map((todo) => (
            <TodoItem
              key={uuid()}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))
        )}
      </TodoList>
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />
    </>
  )
}

export default AppUI
