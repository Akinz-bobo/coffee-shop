import { StyleSheet, Text, View } from "react-native"
import React from "react"
import colors from "../utils/colors"

export default function AppText({ title, variant = "small", style, color }) {
  return (
    <Text
      style={[
        styles.text,
        {
          fontSize: variant === "bold" ? 30 : 16,
          color: color ? colors.primary : colors.white,
        },
        style,
      ]}
    >
      {title}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontWeight: "700",
  },
})
