import "./TodoSearch.css"

interface Props {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
  searchValue: string
}

export function TodoSearch({ setSearchValue, searchValue }: Props) {
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
