import { ImageBackground, StyleSheet, Text, View } from "react-native"
import React from "react"
import Screen from "../components/Screen"
import Logo from "../components/Logo"
import BackButton from "../components/BackButton"
import IconButton from "../components/IconButton"

export default function OriginDetailScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <ImageBackground
          esizeMode="cover"
          style={styles.image}
          source={require("../assets/img1.png")}
        >
          <View style={styles.icons}>
            <BackButton />
            <IconButton icon="heart" color="red" />
          </View>
          <Text style={styles.text}>Rwanda Beans </Text>
        </ImageBackground>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "60%",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
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
    backgroundColor: "#000000c0",
  },
})
