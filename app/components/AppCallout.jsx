import { StyleSheet, Text, View, Image } from "react-native"
import React from "react"
import { Callout } from "react-native-maps"
import colors from "../utils/colors"
export default function AppCallout({ item }) {
  return (
    <Callout tooltip={false} style={styles.callout}>
      <View style={styles.callout}>
        <Text style={styles.text}>{item.title}</Text>
      </View>
    </Callout>
  )
}

const styles = StyleSheet.create({
  callout: {
    width: 300,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: "700",
  },
})
