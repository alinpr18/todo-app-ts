import { useState } from "react"
import "./TodoSearch.css"

interface Props {
  searchValue: string
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
}

function TodoSearch({ searchValue, setSearchValue }: Props) {
  const onSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  return (
    <input
      className="input"
      type="text"
      placeholder="Buscar aqui"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  )
}

export default TodoSearch
