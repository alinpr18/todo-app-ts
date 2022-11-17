import { ComponentType, useState } from "react"

export function withStorageListener<T>(WrappedComponent: ComponentType<T>) {
  return function WrappedComponentWithStorageListener(props: T) {
    const [storageChange, setStorageChange] = useState(false)

    console.log(props)

    window.addEventListener("storage", (change) => {
      if (change.key === "TODOS_V1") {
        console.log("hubo cambios en todos_v1")
        setStorageChange(true)
      }
    })

    const toggleShow = () => {
      // console.log(props.sincronize())
      props.sincronize()
      setStorageChange(false)
    }

    return (
      <WrappedComponent
        {...props}
        show={storageChange}
        toggleShow={toggleShow}
      />
    )
  }
}
