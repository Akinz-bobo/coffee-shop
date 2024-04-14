import { useEffect, useState, useMemo, useCallback } from "react"
import { request } from "../utils/constants"
import { Alert } from "react-native"

export const useGetData = () => {
  const [origins, setOrigin] = useState([])
  const [shops, setShops] = useState([])
  const [isReady, setIsReady] = useState(false)

  const getData = async () => {
    try {
      const originData = await request.get("/coffeebeans")
      const shopData = await request.get("/shops")
      setOrigin(v => originData.data)
      setShops(v => shopData.data)
      setIsReady(true)
    } catch (error) {
      console.log(error)
      Alert("Failed to load coffee data")
    } finally {
      setIsReady(true)
    }
  }
  useEffect(() => {
    getData()
  }, [])
  return {
    shops,
    origins,
    isReady,
  }
}
