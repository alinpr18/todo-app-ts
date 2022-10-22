import "./CreateTodoButton.css"
import { GrAddCircle } from "react-icons/gr"

interface Props {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

function CreateTodoButton({ setOpenModal }: Props) {
  const onClickButton = () => {
    setOpenModal((open) => !open)
  }

  return (
    <button onClick={onClickButton} className="btn">
      <GrAddCircle className="btn-icon" />
    </button>
  )
}

export default CreateTodoButton
