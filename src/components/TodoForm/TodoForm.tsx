import React, { useContext, useState } from "react"
import { TodoContext } from "../../context/TodoContext"
import "./TodoForm.css"

function TodoForm() {
  const appContext = useContext(TodoContext)
  const [newTodoValue, setNewTodoValue] = useState("")

  const onCancel = () => {
    appContext?.setOpenModal(false)
  }

  const onAdd = () => {
    appContext?.addTodo(newTodoValue)
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

export default TodoForm
