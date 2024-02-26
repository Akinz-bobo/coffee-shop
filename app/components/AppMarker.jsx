import { StyleSheet, Image, View } from "react-native"
import React from "react"
import colors from "../utils/colors"
export default function AppMarker() {
  return (
    <View style={styles.roundMarker}>
      <Image
        style={styles.roundImage}
        source={require("../assets/icon7.jpg")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  roundMarker: {
    height: 40,
    width: 42,
    // backgroundColor: colors.primary,
    borderRadius: 20,
  },
  roundImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
})
