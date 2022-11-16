import { useState } from "react"
import "./TodoForm.css"

interface Props {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  addTodo: (text: string) => void
}

export function TodoForm({ setOpenModal, addTodo }: Props) {
  const [newTodoValue, setNewTodoValue] = useState("")

  const onCancel = () => {
    setOpenModal(false)
  }

  const onAdd = () => {
    addTodo(newTodoValue)
  }
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewTodoValue(e.target.value)
  }
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onCancel()
  }

  return (
    <form onSubmit={onSubmit} className="form-container">
      <label htmlFor="create-todo">Escribe tu nuevo ToDo</label>
      <textarea
        id="create-todo"
        value={newTodoValue}
        placeholder="Escribe tu nuevo ToDo"
        cols={30}
        rows={5}
        onChange={onChange}
      ></textarea>
      <div className="form-btn">
        <button type="button" onClick={onCancel}>
          Cancelar
        </button>
        <button onClick={onAdd}>Añadir</button>
      </div>
    </form>
  )
}
