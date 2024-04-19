import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState, useContext, createContext } from "react"
import { favKeyAddon } from "../utils/constants"

const FavoriteContext = createContext()

const FavoriteContextProvider = ({ children }) => {
  const [allFavoriteShops, setAllFavoriteShops] = useState([])
  const [allFavoriteIds, setAllFavoriteIds] = useState([])
  const getAllFavouriteShops = async () => {
    try {
      const allFavKeys = await AsyncStorage.getAllKeys()
      if (allFavKeys) {
        const allShops = allFavKeys.map(async key => {
          const isFav = key.includes(favKeyAddon)
          if (isFav) {
            const shopItem = await AsyncStorage.getItem(key)
            return JSON.parse(shopItem)
          }
        })

        return Promise.all(allShops)
      }
    } catch (error) {}
    console.log(error)
  }
  useEffect(() => {
    getAllFavouriteShops().then(shops => {
      setAllFavoriteShops(shops)
    })
  }, [])
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
  const checkIsfavorite = async id => {
    try {
      const isFav = await AsyncStorage.getItem(id + favKeyAddon)
      return isFav ? true : false
    } catch (e) {}
  }
  const toggleFavouriteStore = async item => {
    try {
      const isFav = await checkIsfavorite(item._id)
      if (isFav) {
        await removeFavourite(item)
        setAllFavoriteShops(prev => {
          let KeptSHops = prev.filter(shop => shop._id !== item._id)
          return KeptSHops
        })
        setAllFavoriteIds(prev => prev.filter(id => id !== item._id))
      } else {
        await storeFavourites(item)
        setAllFavoriteShops(prev => [...prev, item])
        setAllFavoriteIds(prev => [...prev, item._id])
      }
    } catch (e) {}
  }

  const values = {
    toggleFavouriteStore,
    getAllFavouriteShops,
    allFavoriteShops,
    allFavoriteIds,
  }
  return (
    <FavoriteContext.Provider value={values}>
      {children}
    </FavoriteContext.Provider>
  )
}

export default FavoriteContextProvider

export const useFavouritesStore = () => {
  const {
    toggleFavouriteStore,
    getAllFavouriteShops,
    allFavoriteShops,
    allFavoriteIds,
  } = useContext(FavoriteContext)
  return {
    toggleFavouriteStore,
    getAllFavouriteShops,
    allFavoriteShops,
    allFavoriteIds,
  }
}
