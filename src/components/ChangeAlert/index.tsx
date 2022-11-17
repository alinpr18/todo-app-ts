import "./ChangeAlert.css"
import { withStorageListener } from "./withStorageListener"

type Props = {
  show: boolean
  toggleShow: React.Dispatch<React.SetStateAction<boolean>>
}

function ChangeAlert({ show, toggleShow }: Props) {
  if (show) {
    return (
      <div className="alert-bg">
        <div className="alert-container">
          <p>Tu información está desactualizada</p>
          <button onClick={() => toggleShow(false)}>Actualizar</button>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)
