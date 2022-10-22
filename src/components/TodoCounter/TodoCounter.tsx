import { useContext } from "react"
import { TodoContext } from "../../context/TodoContext"
import "./TodoCounter.css"

function TodoCounter() {
  const appContext = useContext(TodoContext)

  return (
    <>
      {(appContext?.totalTodos && appContext?.completedTodos) === 0 ? (
        <h2 className="title">No has realizado ningún ToDo</h2>
      ) : appContext?.totalTodos &&
        appContext.completedTodos != 0 &&
        appContext.totalTodos === appContext.completedTodos ? (
        <h2 className="title">Has completado todos los Todo</h2>
      ) : (
        <h2 className="title">
          Has completado {appContext?.completedTodos} de{" "}
          {appContext?.totalTodos} ToDo
        </h2>
      )}
    </>
  )
}

export default TodoCounter
