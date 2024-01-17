import { Image, ImageBackground, StyleSheet, Text, View } from "react-native"
import React from "react"

export default function WelcomScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../assets/bg2.png")}
      >
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../assets/logo.jpg")} />
        </View>
        <Text style={styles.text}>Welcome to Coffee Origin</Text>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.50)",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.50)",
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
})
