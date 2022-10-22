import { createPortal } from "react-dom"
import "./Modal.css"

interface Props {
  children: React.ReactNode
}

function Modal({ children }: Props) {
  return createPortal(
    <div className="modal-container">{children}</div>,
    document.getElementById("modal") as HTMLDivElement
  )
}

export default Modal
