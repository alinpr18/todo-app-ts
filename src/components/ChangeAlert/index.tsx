import { useStorageListener } from "../../hooks/useStorageListener"
import "./ChangeAlert.css"

type Props = {
  sync: () => void
}

export function ChangeAlert({ sync }: Props) {
  const { show, toggleShow } = useStorageListener(sync)
  if (show) {
    return (
      <div className="alert-bg">
        <div className="alert-container">
          <p>Tu información está desactualizada</p>
          <button onClick={toggleShow}>Actualizar</button>
        </div>
      </div>
    )
  } else {
    return null
  }
}
