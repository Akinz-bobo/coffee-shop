import { useContext, createContext, useState, useEffect } from "react"
import { useFavouritesStore } from "../hooks/localStorage"
const favCtx = createContext({ fav: [], getFav: () => {} })
export const useFavouriteCtx = () => useContext(favCtx)
export const FavCtxWrapper = ({ children }) => {
  const [fav, setFav] = useState([])
  const { getAllFavourites } = useFavouritesStore()

  const getFav = async () => {
    try {
      const allFavs = await getAllFavourites()
      console.log(allFavs)
      if (allFavs && allFavs.length > 0) {
        setFav(v => allFavs.map(val => JSON.parse(val)))
      }
    } catch (e) {}
  }
  useEffect(() => {
    getFav()
  }, [])
  return <favCtx.Provider value={{ fav, getFav }}>{children}</favCtx.Provider>
}
