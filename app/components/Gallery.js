import { Image, StyleSheet, Text, View } from "react-native"
import React from "react"
import AppText from "./AppText"

export default function Gallery({cover_image,image1,image2}) {
  const img0 = cover_image ? {uri:cover_image} : require("../assets/g1.png")
  const img1 = image1 ? {uri:image1} : require("../assets/g2.png")
  const img2 = image2 ? {uri:image2} : require("../assets/g3.png")
  // console.log({img0,img1,img2})
  return (
    <View style={styles.gallery}>
      <Image source={img0} style={styles.cover_image} />
      <View style={styles.stack}>
        <Image source={img1} style={styles.image} />
        <Image source={img2} style={styles.image} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  gallery: {
    flexDirection: "row",
    gap: 10,
    height:200,
  },
  cover_image:{
    borderRadius: 10,
    flex:2
  },
  stack: {
    gap: 10,
    flex:1,
    height:200
  },
  image: {
    borderRadius: 10,
    height:95
  },
})
