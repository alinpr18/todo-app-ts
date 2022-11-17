import { withStorageListener } from "./withStorageListener"

type Props = {
  show: boolean
  toggleShow: React.Dispatch<React.SetStateAction<boolean>>
}

function ChangeAlert({ show, toggleShow }: Props) {
  console.log(toggleShow)
  if (show) {
    return (
      <>
        <p onClick={() => toggleShow(false)}>Hubo cambios</p>
        <button>volver a cargar</button>
      </>
    )
  } else {
    return null
  }
}

export const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)
