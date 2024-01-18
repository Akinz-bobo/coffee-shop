import { Image, StyleSheet, Text, View } from "react-native"
import React from "react"
import BackButton from "./BackButton"

export default function Logo({ icon = false }) {
  return (
    <View
      style={[
        styles.logoContainter,
        { justifyContent: icon ? "space-between" : "flex-end" },
      ]}
    >
      {icon && <BackButton />}
      <Image source={require("../assets/logo.jpg")} style={styles.logo} />
    </View>
  )
}

const styles = StyleSheet.create({
  logoContainter: {
    width: "90%",
    flexDirection: "row",
  },
  logo: {
    height: 40,
    width: 40,
  },
})
