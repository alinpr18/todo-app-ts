import { ComponentType, useState } from "react"

interface Props {
  sincronize: () => void
}

interface stateProps {
  show: boolean
  toggleShow: () => void
}

export function withStorageListener<T extends Props>(
  WrappedComponent: ComponentType<stateProps>
) {
  return function WrappedComponentWithStorageListener({ sincronize }: T) {
    const [storageChange, setStorageChange] = useState(false)

    window.addEventListener("storage", (change) => {
      if (change.key === "TODOS_V1") {
        console.log("hubo cambios en todos_v1")
        setStorageChange(true)
      }
    })

    const toggleShow = () => {
      sincronize()
      setStorageChange(false)
      console.log("cliccc")
    }

    return <WrappedComponent show={storageChange} toggleShow={toggleShow} />
  }
}
