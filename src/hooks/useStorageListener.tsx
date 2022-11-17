import { useState } from "react"

export function useStorageListener(synchronize: () => void) {
  const [storageChange, setStorageChange] = useState(false)

  window.addEventListener("storage", (change) => {
    if (change.key === "TODOS_V1") {
      console.log("hubo cambios en todos_v1")
      setStorageChange(true)
    }
  })

  const toggleShow = () => {
    synchronize()
    setStorageChange(false)
  }

  return { show: storageChange, toggleShow }
}
