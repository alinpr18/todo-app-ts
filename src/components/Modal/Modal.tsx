import { createPortal } from "react-dom"
import "./Modal.css"

interface Props {
  children: React.ReactNode
}

export function Modal({ children }: Props) {
  return createPortal(
    <div className="modal-container">{children}</div>,
    document.getElementById("modal") as HTMLDivElement
  )
}
