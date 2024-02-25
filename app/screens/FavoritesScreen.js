import { FlatList, StyleSheet, Text, View } from "react-native"
import React, { useEffect, useState } from "react"
import { useGetShops } from "../hooks/fetch"
import AppText from "../components/AppText"
import GradientCard from "../components/GradientCard"
import Screen from "../components/Screen"
import { useFavouritesStore } from "../hooks/localStorage"
import { useFavouriteCtx } from "../contexts/FavouritesCtx"

export default function FavoritesScreen({ navigation }) {
  // const { getShops, shops } = useGetShops()
  // const [shops,setShops] = useState([])
  const {fav:shops,getFav} = useFavouriteCtx()
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
          shops.filter((val)=>val != null).map((item,i) => (
            <GradientCard
            key={item?._id || i+"favRender"}
              distance={2000}
              totalRatings={item?.ratingCount}
              decription={item?.description.split(0, 20) + "..."}
              image={item?.cover_image[0]}
              stars={item?.rating}
              title={item?.shop_name}
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
