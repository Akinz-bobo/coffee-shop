import { StyleSheet, Text, View } from "react-native"
import React from "react"
import AppText from "../components/AppText"
import GradientCard from "../components/GradientCard"
import Screen from "../components/Screen"
import { useFavouriteCtx } from "../contexts/FavouritesCtx"

export default function FavoritesScreen({ navigation }) {
  const { fav: shops } = useFavouriteCtx()
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
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 16,
          overflow: "visible",
        }}
      >
        {shops.length > 0 ? (
          shops
            .filter(val => val != null)
            .map((item, i) => (
              <GradientCard
                key={item?._id || i + "favRender"}
                distance={2000}
                totalRatings={item?.ratingCount}
                decription={item?.description.split(0, 20) + "..."}
                image={item?.cover_image[0]}
                stars={item?.rating}
                title={item?.shop_name}
                icon={"heart"}
                id={item._id}
                onPress={() => navigation.navigate("Shop", item)}
                style={{
                  marginRight: 0,
                  with: 175,
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
