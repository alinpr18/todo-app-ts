import { useEffect, useState } from "react"
import { Todos } from "../types"

// interface Props {
//   itemName: string
//   initialValue: undefined
// }

function useLocalStorage(itemName: string, initialValue: Todos) {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [item, setItem] = useState(initialValue)

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem: Todos = []

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }

        setItem(parsedItem)
        setLoading(false)
      } catch (error) {
        setError(true)
        console.log(error)
      }
    }, 2000)
  }, [])

  const saveItem = (newItem: Todos) => {
    try {
      const stringifiedItem = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringifiedItem)
      setItem(newItem)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  return { item, saveItem, loading, error }
}

export default useLocalStorage
