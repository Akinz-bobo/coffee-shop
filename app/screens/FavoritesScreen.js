import { StyleSheet, Text, View } from "react-native"
import React, { useEffect, useState } from "react"
import AppText from "../components/AppText"
import GradientCard from "../components/GradientCard"
import Screen from "../components/Screen"
import { useFavouritesStore } from "../hooks/localStorage"

export default function FavoritesScreen({ navigation }) {
  const { allFavoriteShops } = useFavouritesStore()

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
        {allFavoriteShops.length > 0 ? (
          allFavoriteShops.map((item, i) => (
            <GradientCard
              key={item?.id || i + "favRender"}
              distance={item.distance}
              totalRatings={item?.totalRatings}
              decription={item?.decription.split(0, 20) + "..."}
              image={item?.image}
              stars={item?.stars}
              title={item?.title}
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
