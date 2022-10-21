import "./TodoList.css"

interface Props {
  children: React.ReactNode
}

function TodoList({ children }: Props) {
  return (
    <section>
      <ul className="todo-list">{children}</ul>
    </section>
  )
}

export default TodoList
