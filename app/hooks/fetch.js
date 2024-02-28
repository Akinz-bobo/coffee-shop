import { useEffect, useState, useMemo, useCallback } from "react"
import { request } from "../utils/constants"
import { Alert } from "react-native"

export const useGetShops = () => {
  const [shops, setShops] = useState([])
  const [isReady, setIsReady] = useState(false)
  const getShops = useCallback(async () => {
    try {
      const gShops = await request.get("/shops")

      setShops(gShops.data)
    } catch (e) {
      console.log(e.message || "an error occured while getting shops")
    }
  }, [])
  // useEffect(()=>{
  //     (async()=>await getShops())()
  // },[])
  return { shops, getShops }
}
export const useGetOrigin = () => {
  const [origin, setorigin] = useState([])
  const getorigin = useCallback(async () => {
    try {
      const gorigin = await request.get("/coffeebeans")
      // console.log(gShops.data[0].cover_image[0])
      setorigin(gorigin.data)
    } catch (e) {
      console.log(e.message || "an error occured while getting shops")
    }
  }, [])
  useEffect(() => {}, [])
  return { origin, getorigin }
}

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
