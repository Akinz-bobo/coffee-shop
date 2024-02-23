import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect,useState } from 'react';
import { favKeyAddon } from '../utils/constants';
export const useFavouritesStore=(shopItem)=>{
    // const favKey = "favouri7"
    const [fav,setFav] = useState(false)
    const getAllFavourites = async () => {
      try {
        const allFav = await AsyncStorage.getAllKeys();
        console.log({allFav1:allFav})
        const allFavKeys =  allFav ? allFav.length > 0 ? allFav.reduce((prev,curr)=>{
          const currItem = curr.includes(favKeyAddon)
          if(currItem){
            prev.push(curr)
          }
          return prev
        },
        []): [] : []
        console.log({allFavKeys})
        const allFavourites = allFavKeys && allFavKeys.length > 0 ?
         (await AsyncStorage.multiGet(allFavKeys)).map(([a,b])=>b)
          : []
        console.log({allFavourites})
        return allFavourites
      } catch (e) {
        // console.log(e.message)
        return []
      }
    };
    const storeFavourites = async (item) => {
      try {
        await AsyncStorage.setItem(item._id+favKeyAddon, JSON.stringify(item));
        return "done!";
      } catch (e) {
        // console.log(e.message)
      }
    };
    const removeFavourite = async (item) => {
      try {
        await AsyncStorage.removeItem(item._id+favKeyAddon)
        return "removed!";
      } catch (e) {
        //  console.log(e.message)
        }
    };
    const isFavourite =  async(item) => {
      try {
        const isFav = await AsyncStorage.getItem(item?._id+favKeyAddon)
        // console.log({isFav})
        return isFav ? true :false;
      } catch (e) { 
        // console.log(e.message)
      }
    };
    const toggleFavouriteStore = async (item) => {
        console.log("toggle worked")
      try {
        const isFav = await isFavourite(item);
        console.log({isFav});
        if (isFav) {
          removeFavourite(item);
          setFav(false);
        }else{
            console.log("Working here")
            await storeFavourites(item);
            setFav(true);
        }
        return "Done";
      } catch (e) { 
        // console.log(e.message)
      }
    };
    
    useEffect(()=>{
        (async()=>{if(shopItem){
            const isf = await isFavourite(shopItem);
            // AsyncStorage.multiGet(allF)
            setFav(isf)
        }})()
    },[])
    return {toggleFavouriteStore,storeFavourites,getAllFavourites,removeFavourite,fav}
}

