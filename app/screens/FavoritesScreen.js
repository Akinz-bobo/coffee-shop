import { FlatList, StyleSheet, Text, View } from "react-native"
import React, { useEffect, useState } from "react"
import { useGetShops } from "../hooks/fetch"
import AppText from "../components/AppText"
import GradientCard from "../components/GradientCard"
import Screen from "../components/Screen"
import { useFavouritesStore } from "../hooks/localStorage"

export default function FavoritesScreen({ navigation }) {
  // const { getShops, shops } = useGetShops()
  const [shops,setShops] = useState([])
  const {getAllFavourites} = useFavouritesStore()
  useEffect(()=>{
    (async()=>{
      try {
        const allFavs = await getAllFavourites();
        console.log({allFavs})
        if(allFavs && allFavs.length > 0){
          setShops(v=>allFavs.map(val=>JSON.parse(val)))
        }
      } catch (e) {
      }
    })()
  },[])
  return (
    <Screen>
      <View style={{ width: "100%" }}>
        <Text
          style={{
            color: "white",
            fontSize: 25,
            textAlign: "center",
            fontWeight: 600,
          }}
        >
          Favorite Shops
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          overflow: "visible",
        }}
      >
        {shops.length > 0 ? (
          shops.map((item,i) => (
            <GradientCard
            key={item._id}
              distance={2000}
              totalRatings={item.ratingCount}
              decription={item.description.split(0, 20) + "..."}
              image={item.cover_image[0]}
              stars={item.rating}
              title={item.shop_name}
              icon={"heart"}
              item={item}
              onPress={() => navigation.navigate("Shop", item)}
              style={{
                marginRight: 0,
              }}
            />
          ))
        ) : (
          <AppText title="No favourite" />
        )}
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({})
