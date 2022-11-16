import uuid from "react-uuid"
import { CreateTodoButton } from "./components/CreateTodoButton/CreateTodoButton"
import { EmptyTodos } from "./components/EmptyTodos/EmptyTodos"
import { Modal } from "./components/Modal/Modal"
import { TodoCounter } from "./components/TodoCounter/TodoCounter"
import { TodoForm } from "./components/TodoForm/TodoForm"
import { TodoHeader } from "./components/TodoHeader/TodoHeader"
import { TodoItem } from "./components/TodoItem/TodoItem"
import { TodoList } from "./components/TodoList/TodoList"
import { TodoSearch } from "./components/TodoSearch/TodoSearch"
import { TodosError } from "./components/TodosError/TodosError"
import { TodosLoading } from "./components/TodosLoading/TodosLoading"
import { useTodos } from "./hooks/useTodos"

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    setSearchValue,
    searchValue,
    addTodo,
  } = useTodos()

  return (
    <>
      <TodoHeader>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch setSearchValue={setSearchValue} searchValue={searchValue} />
      </TodoHeader>
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
          <TodoForm setOpenModal={setOpenModal} addTodo={addTodo} />
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />
    </>
  )
}

export default App
