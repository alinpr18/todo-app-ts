import { useEffect, useState } from "react"
import { Todos } from "../types"

export function useLocalStorage(itemName: string, initialValue: Todos[]) {
  const [sync, setSync] = useState(true)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [item, setItem] = useState(initialValue)

  useEffect(() => {
    try {
      const localStorageItem = localStorage.getItem(itemName)
      let parsedItem: Todos[] = []

      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue))
      } else {
        parsedItem = JSON.parse(localStorageItem)
      }

      setItem(parsedItem)
      setSync(true)
    } catch (error) {
      setError(true)
      console.log(error)
    } finally {
      setLoading(false)
    }
  }, [sync])

  const saveItem = (newItem: Todos[]) => {
    try {
      const stringifiedItem = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringifiedItem)
      setItem(newItem)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  const synchronize = () => {
    setLoading(true)
    setSync(false)
  }

  return { item, saveItem, loading, error, synchronize }
}
