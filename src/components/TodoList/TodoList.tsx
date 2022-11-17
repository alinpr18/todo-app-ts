import { Todos } from "../../types"
import "./TodoList.css"

interface Props {
  children: (todo: Todos) => React.ReactNode
  error: boolean
  onError: () => JSX.Element
  loading: boolean
  onLoading: () => JSX.Element
  searchedTodos: Todos[]
  onEmptyTodos: () => JSX.Element
  render?: (todo: Todos) => React.ReactNode
  totalTodos: number
  onEmptySearchResult: (text: string) => JSX.Element
  searchValue: string
}

export function TodoList({
  error,
  onError,
  loading,
  onLoading,
  searchedTodos,
  onEmptyTodos,
  render,
  totalTodos,
  onEmptySearchResult,
  searchValue,
  children,
}: Props) {
  return (
    <section className="container">
      <ul className="todo-list">
        {error
          ? onError()
          : loading
          ? onLoading()
          : !totalTodos
          ? onEmptyTodos()
          : !searchedTodos.length
          ? onEmptySearchResult(searchValue)
          : searchedTodos.map(render || children)}
      </ul>
    </section>
  )
}
