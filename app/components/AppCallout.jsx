import { StyleSheet, Text, View, Image } from "react-native"
import React from "react"
import { Callout } from "react-native-maps"
import colors from "../utils/colors"
export default function AppCallout({ item }) {
  //   console.log(item)
  return (
    <Callout tooltip={false}>
      <View style={styles.callout}>
        <Text style={styles.text}>{item.title}</Text>
      </View>
    </Callout>
  )
}

const styles = StyleSheet.create({
  callout: {
    // flex: 1,
    // maxWidth: 400,
    height: 40,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: "700",
  },
})
