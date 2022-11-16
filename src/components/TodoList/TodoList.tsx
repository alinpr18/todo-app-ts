import "./TodoList.css"

interface Props {
  children: React.ReactNode
}

export function TodoList({ children }: Props) {
  return (
    <section className="container">
      <ul className="todo-list">{children}</ul>
    </section>
  )
}
