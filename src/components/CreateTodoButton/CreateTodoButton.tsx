import { GrAddCircle } from "react-icons/gr"
import "./CreateTodoButton.css"

interface Props {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

export function CreateTodoButton({ setOpenModal }: Props) {
  const onClickButton = () => {
    setOpenModal((open) => !open)
  }

  return (
    <button onClick={onClickButton} className="btn">
      <GrAddCircle className="btn-icon" />
    </button>
  )
}
