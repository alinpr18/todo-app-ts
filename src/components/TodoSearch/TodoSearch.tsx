import { useContext } from "react"
import { TodoContext } from "../../context/TodoContext"
import "./TodoSearch.css"

function TodoSearch() {
  const appContext = useContext(TodoContext)

  const onSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    appContext?.setSearchValue(e.target.value)
  }

  return (
    <input
      className="input"
      type="text"
      placeholder="Buscar aqui"
      value={appContext?.searchValue}
      onChange={onSearchValueChange}
    />
  )
}

export default TodoSearch
