import { StyleSheet, Text, TouchableOpacity } from "react-native"

import React from "react"

import colors from "../utils/colors"

export default function TextButton({
  title,
  onPress,
  background,
  style,
  active,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: background ? colors[background] : colors.medium,
          borderWidth: active ? 1 : 0,
        },
        style,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.title,
          { color: active ? colors.primary : colors.white },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderTopColor: colors.primary,
    borderStartColor: colors.primary,
    borderBottomColor: colors.primary,
    borderEndColor: colors.primary,
  },
  title: {
    textAlign: "center",
    fontSize: 16,
    color: colors.light,
  },
})
