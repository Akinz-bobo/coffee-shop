import AsyncStorage from "@react-native-async-storage/async-storage";

const favKey = "favourite"
const getAllFavourites = async () => {
  try {
    const allFav = await AsyncStorage.getItem(favKey);
    console.log({allFav1:allFav})
    return allFav ? JSON.parse(allFav) : [];
  } catch (e) {
    console.log(e.message)
    return []
  }
};
const storeFavourites = async (item,storedFav) => {
  console.log({item})
  try {
    const favs = storedFav.push(item);
    console.log({ favs });
    await AsyncStorage.setItem(favKey, JSON.stringify(favs));
    return "done!";
  } catch (e) {
    console.log(e.message)
  }
};
const removeFavourite = async (id,storedFav) => {
  try {
    // const storedFav = await getAllFavourites();
    await AsyncStorage.setItem(
      favKey,
      storedFav.filter((v) => v != id)
    );
    return "removed!";
  } catch (e) { console.log(e.message)}
};
const isFavourite =  (id,allFav=[]) => {
  try {
    // const allFav = favs;
    console.log({allFav})
    const isFav = allFav.includes(id);
    // setFav(isFav);
    return isFav;
  } catch (e) { console.log(e.message)}
};
const togglFavourite = async (id) => {
    // console.log("toggle worked")
  try {
    const allFavs = await getAllFavourites()
    console.log("before is fav")
    const isFav = isFavourite(id,allFavs);
    console.log(isFav);
    if (isFav) {
      removeFavourite(id,allFavs);
    //   setFav(false);
    }else{
        console.log("Working here")
        await storeFavourites(id,allFavs);
        // setFav(true);
    }
    return "Done";
  } catch (e) { console.log(e.message)}
};

export {
    togglFavourite,
  isFavourite,
  getAllFavourites,
  removeFavourite,
  storeFavourites,
};
