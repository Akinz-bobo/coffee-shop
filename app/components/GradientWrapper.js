import { StyleSheet, Text, View } from "react-native"
import React from "react"
import { LinearGradient } from "expo-linear-gradient"

export default function GradientWrapper({ children }) {
  return (
    <LinearGradient
      colors={["rgba(38, 43, 51, 0.70)", "#252A32"]}
      locations={[0.4, 1]}
      start={{ x: 0.1, y: 0.2 }}
      style={styles.container}
    >
      {children}
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "70%",
    position: "absolute",
    top: 0,
    borderRadius: 10,
    padding: 20,
    maxHeight: 500,
  },
})
