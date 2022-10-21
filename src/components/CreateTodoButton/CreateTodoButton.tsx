import "./CreateTodoButton.css"
import { GrAddCircle } from "react-icons/gr"

function CreateTodoButton() {
  const onClickButton = () => {
    alert("Hello world")
  }

  return (
    <button onClick={onClickButton} className="btn">
      <GrAddCircle className="btn-icon" />
    </button>
  )
}

export default CreateTodoButton
