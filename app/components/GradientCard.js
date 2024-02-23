import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native"
import React, { useEffect, useState } from "react"
import { LinearGradient } from "expo-linear-gradient"
import { FontAwesome } from "@expo/vector-icons"
import Ratings from "./Ratings"
import colors from "../utils/colors"
import { useFavouritesStore } from "../hooks/localStorage"

const GradientCard = ({
  image,
  title,
  origin,
  decription,
  distance,
  stars,
  totalRatings,
  icon,
  onPress,
  style,
  item
}) => {
  const {fav:favorite} = useFavouritesStore(item)
  // const [favorite, setFavorite] = useState(false)
  // useEffect(()=>{
  //   (async()=>{

  //   },[])
  // },[])
  return (
    <TouchableHighlight onPress={onPress}>
      <LinearGradient
        colors={["rgba(38, 43, 51, 0.70)", "#252A32"]}
        locations={[0.4, 1]}
        start={{ x: 0.1, y: 0.2 }}
        style={[styles.card, style]}
      >
        <View>
          <Image source={{ uri: image }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
          <View style={styles.details}>
            {origin && (
              <View style={styles.detail}>
                <Text style={styles.origin}>{origin}</Text>
                <Text style={styles.description} numberOfLines={2}>
                  {decription}
                </Text>
              </View>
            )}

            {distance && (
              <View style={styles.detail}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ color: "white", marginRight: 2 }}>
                    {stars > 5 ? 5 : stars}
                  </Text>
                  <Text style={{ color: colors.light }}>({totalRatings})</Text>
                </View>
                <Ratings stars={stars} />
              </View>
            )}

            {icon && (
              <LinearGradient
                colors={["rgba(38, 43, 51, 0.70)", "#252A32"]}
                locations={[0.4, 1]}
                start={{ x: 0.1, y: 0.2 }}
                style={styles.icon}
              >
                <TouchableOpacity onPress={() => setFavorite(!favorite)}>
                  <FontAwesome
                    name={icon}
                    size={24}
                    color={favorite ? colors.red : colors.white}
                  />
                </TouchableOpacity>
              </LinearGradient>
            )}
          </View>
        </View>
      </LinearGradient>
    </TouchableHighlight>
  )
}

export default GradientCard

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    height: 300,
    width: 185,
    padding: 20,
    alignItems: "center",
    marginRight: 15,
  },
  details: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  detail: {
    flex: 1,
  },
  icon: {
    height: 50,
    width: 50,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    borderRadius: 15,
    flex: 1,
    width: 160,
    minHeight: 150,
  },

  title: {
    fontSize: 18,
    color: "white",
    marginTop: 10,
  },
  origin: {
    color: "white",
    marginTop: 5,
  },
  description: {
    color: "white",
    marginTop: 5,
  },
})
