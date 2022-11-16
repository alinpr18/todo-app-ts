import { AiFillCheckCircle, AiOutlineCheckCircle } from "react-icons/ai"
import { IoIosRemoveCircle } from "react-icons/io"
import "./TodoItem.css"

interface Props {
  text: string
  completed: boolean
  onComplete: (text: React.MouseEvent<SVGElement, MouseEvent>) => void
  onDelete: (text: React.MouseEvent<SVGElement, MouseEvent>) => void
}

export function TodoItem({ text, completed, onComplete, onDelete }: Props) {
  return (
    <li className="todo-item">
      {completed ? (
        <AiFillCheckCircle onClick={onComplete} />
      ) : (
        <AiOutlineCheckCircle onClick={onComplete} />
      )}
      <p className={`${completed && "todo-checked"}`}>{text}</p>
      <IoIosRemoveCircle className="icon-remove" onClick={onDelete} />
    </li>
  )
}
