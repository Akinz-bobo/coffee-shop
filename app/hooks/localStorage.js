import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import { favKeyAddon } from "../utils/constants"
export const useFavouritesStore = id => {
  const [fav, setFav] = useState(false)
  const getAllFavourites = async () => {
    try {
      const allFav = await AsyncStorage.getAllKeys()
      const allFavKeys = allFav
        ? allFav.length > 0
          ? allFav.reduce((prev, curr) => {
              const currItem = curr.includes(favKeyAddon)
              if (currItem) {
                prev.push(curr)
              }
              return prev
            }, [])
          : []
        : []
      const allFavourites =
        allFavKeys && allFavKeys.length > 0
          ? (await AsyncStorage.multiGet(allFavKeys)).map(([a, b]) => b)
          : []
      return allFavourites
    } catch (e) {
      return []
    }
  }
  const storeFavourites = async item => {
    try {
      await AsyncStorage.setItem(item._id + favKeyAddon, JSON.stringify(item))
      return "done!"
    } catch (e) {}
  }
  const removeFavourite = async item => {
    try {
      await AsyncStorage.removeItem(item._id + favKeyAddon)
      return "removed!"
    } catch (e) {}
  }
  const isFavourite = async id => {
    try {
      const isFav = await AsyncStorage.getItem(id + favKeyAddon)
      return isFav ? true : false
    } catch (e) {}
  }
  const toggleFavouriteStore = async item => {
    try {
      const isFav = await isFavourite(item._id)
      if (isFav) {
        removeFavourite(item)
        setFav(false)
      } else {
        await storeFavourites(item)
        setFav(true)
      }
      return "Done"
    } catch (e) {}
  }

  useEffect(() => {
    ;(async () => {
      if (id) {
        const isf = await isFavourite(id)
        setFav(isf)
      }
    })()
  }, [])
  return {
    toggleFavouriteStore,
    storeFavourites,
    getAllFavourites,
    removeFavourite,
    isFavourite,
    fav,
  }
}
