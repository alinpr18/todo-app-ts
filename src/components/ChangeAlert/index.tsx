import { withStorageListener } from "./withStorageListener"

type Props = {
  show: boolean
  toggleShow: React.Dispatch<React.SetStateAction<boolean>>
}

function ChangeAlert({ show, toggleShow }: Props) {
  if (show) {
    return (
      <>
        <p>Hubo cambios</p>
        <button onClick={() => toggleShow(false)}>volver a cargar</button>
      </>
    )
  } else {
    return null
  }
}

export const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)
