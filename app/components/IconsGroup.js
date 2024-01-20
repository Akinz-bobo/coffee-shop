import { StyleSheet, Text, View } from "react-native"
import React from "react"
import BackButton from "./BackButton"
import IconButton from "./IconButton"

export default function IconsGroup() {
  return (
    <View style={styles.icons}>
      <BackButton />
      <IconButton icon="heart" color="red" />
    </View>
  )
}

const styles = StyleSheet.create({
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
  },
})
