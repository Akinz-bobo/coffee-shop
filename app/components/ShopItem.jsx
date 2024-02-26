import React, { memo } from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import colors from "../utils/colors"
import { FontAwesome } from "@expo/vector-icons"

const ShopItem = ({ item, onPress }) => {
  const distance = Math.floor(+item.distance)
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.wraper}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.container}>
          <Text style={styles.distance}>{distance.toString() + "KM"}</Text>
          <View style={styles.container}>
            <View style={styles.group}>
              <FontAwesome name="mobile-phone" size={24} color={colors.light} />
              <Text style={styles.text}>{item.phone}</Text>
            </View>
            <View style={styles.group}>
              <FontAwesome
                name="star-half-o"
                size={20}
                color={colors.primary}
              />
              <Text style={styles.text}>{item.rating}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ShopItem

const styles = StyleSheet.create({
  wraper: {
    marginBottom: 10,
    borderBottomColor: "#52555a7b",
    borderBottomWidth: 2,
    paddingBottom: 5,
  },
  name: {
    color: "white",
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 5,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  distance: {
    color: colors.primary,
    fontSize: 16,
  },
  text: {
    color: colors.light,
    fontSize: 16,
  },
  group: {
    flexDirection: "row",
    gap: 5,
    marginLeft: 10,
  },
})
