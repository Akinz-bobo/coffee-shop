import { Image, StyleSheet, Text, View } from "react-native"
import React from "react"
import AppText from "./AppText"
import colors from "../utils/colors"

export default function Gallery({ cover_image, image1, image2 }) {
  const img0 = cover_image ? { uri: cover_image } : require("../assets/g1.png")
  const img1 = image1 ? { uri: image1 } : require("../assets/g2.png")
  const img2 = image2 ? { uri: image2 } : require("../assets/g3.png")
  // console.log({img0,img1,img2})
  return (
    <View style={styles.gallery}>
      <Image source={img0} style={styles.cover_image} />
      <View style={styles.stack}>
        <Image source={img1} style={styles.image} />
        <Image source={img2} style={styles.image} />
        <Image source={img2} style={styles.image} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  gallery: {
    flexDirection: "column",
    gap: 10,
    height: 300,
  },
  cover_image: {
    borderRadius: 5,
    objectFit: "cover",
    height: 150,
  },
  stack: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flex: 1,
  },
  image: {
    borderRadius: 5,
    objectFit: "cover",
    height: 140,
    width: 110,
    // backgroundColor: colors.primary,
  },
})
