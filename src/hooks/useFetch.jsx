import React from 'react'
import axios from 'axios'

const useFetch = async (url, options) => {
  const [response, setResponse] = React.useState(null)

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios(url)
        setResponse(res.data)
      } catch ({ message }) {
        throw new Error({ message })
      }
    }
    fetchData()
  }, [])
  return { response }
}

export default useFetch
