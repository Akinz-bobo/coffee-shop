import { StyleSheet, Text, View } from "react-native"
import React from "react"
import LottieView from "lottie-react-native"

export default function Loading() {
  return (
    <View
      style={{ justifyContent: "center", width: "100%", alignItems: "center" }}
    >
      <LottieView
        source={require("./loading.json")}
        autoPlay
        loop
        style={styles.container}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  loading: {
    marginTop: 15,
  },

  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "800",
  },
  container: {
    height: 100,
  },
})
