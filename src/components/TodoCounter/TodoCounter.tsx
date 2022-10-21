import "./TodoCounter.css"

interface Props {
  totalTodos: number
  completedTodos: number
}

function TodoCounter({ totalTodos, completedTodos }: Props) {
  return (
    <>
      {/* <h2 className="title">
        Has completado {completedTodos} de {totalTodos} ToDo
      </h2> */}
      {(totalTodos && completedTodos) === 0 ? (
        <h2 className="title">No has realizado ningún ToDo</h2>
      ) : (
        <h2 className="title">
          Has completado {completedTodos} de {totalTodos} ToDo
        </h2>
      )}
    </>
  )
}

export default TodoCounter
