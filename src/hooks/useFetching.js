import { useState } from "react"


export const useFetching = (callback) => {
  const [error, setError] = useState(false)

  const fetching = async () => {
    try {
      await callback()
    } catch (err) {
      setError(err.message)
    }
  }
  return [fetching, error]
}