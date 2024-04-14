import { StyleSheet, View, Text } from "react-native"
import React from "react"
// import LottieView from "lottie-react-native"
// import FILE from "../lottie/loading.json"
export default function Loading() {
  // console.log("Loading...")
  return (
    <View
      style={{ justifyContent: "center", width: "100%", alignItems: "center" }}
    >
      <Text style={styles.text}>Loading ...</Text>
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
    // height: 100,
    flex: 1,
  },
})
