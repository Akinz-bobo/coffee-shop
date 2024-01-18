import { Image, StyleSheet, Text, View } from "react-native"
import React from "react"
import AppText from "./AppText"

export default function Gallery() {
  return (
    <View style={styles.gallery}>
      <Image source={require("../assets/g1.png")} style={styles.image} />
      <View style={styles.stack}>
        <Image source={require("../assets/g2.png")} style={styles.image} />
        <Image source={require("../assets/g3.png")} style={styles.image} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  gallery: {
    flexDirection: "row",
    gap: 10,
  },
  stack: {
    gap: 10,
  },
  image: {
    borderRadius: 10,
  },
})
