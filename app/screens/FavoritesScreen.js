import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native"
import React, { useEffect, useRef } from "react"
import AppText from "../components/AppText"
import GradientCard from "../components/GradientCard"
import Screen from "../components/Screen"
import { useFavouritesStore } from "../hooks/localStorage"
import colors from "../utils/colors"
import LottieView from "lottie-react-native"

import { Animated, Easing } from "react-native"

const { width } = Dimensions.get("screen")
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
          Favorite Shop
        </Text>
      </View>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flex: 1,
            width: "95%",
            height: "100%",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 10,
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
                  width: Math.floor(width / 2 - 16),
                }}
              />
            ))
          ) : (
            <View
              style={{
                flex: 1,
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                padding: 16,
              }}
            >
              <ControlledAnimation />
              <AppText
                title="No favourite"
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  color: colors.light,
                  position: "absolute",
                  // : 20,
                  top: "60%",
                }}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </Screen>
  )
}

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView)

function ControlledAnimation() {
  const animationProgress = useRef(new Animated.Value(0))

  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start()
  }, [])

  return (
    <AnimatedLottieView
      style={{ height: 150, width: 200 }}
      source={require("../assets/lottie/empty-trash.json")}
      progress={animationProgress.current}
    />
  )
}
