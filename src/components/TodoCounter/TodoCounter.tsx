import "./TodoCounter.css"
interface Props {
  totalTodos: number
  completedTodos: number
}

export function TodoCounter({ totalTodos, completedTodos }: Props) {
  return (
    <>
      {(totalTodos && completedTodos) === 0 ? (
        <h2 className="title">No has realizado ningún ToDo</h2>
      ) : totalTodos && completedTodos != 0 && totalTodos === completedTodos ? (
        <h2 className="title">Has completado todos los Todo</h2>
      ) : (
        <h2 className="title">
          Has completado {completedTodos} de {totalTodos} ToDo
        </h2>
      )}
    </>
  )
}
