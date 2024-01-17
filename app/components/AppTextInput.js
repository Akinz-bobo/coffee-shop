import { StyleSheet, Text, TextInput, View } from "react-native"
import React from "react"
import { EvilIcons } from "@expo/vector-icons"
import colors from "../utils/colors"

export default function AppTextInput() {
  return (
    <View style={styles.constainer}>
      <EvilIcons
        name="search"
        size={35}
        color={colors.light}
        style={styles.icon}
      />
      <TextInput
        placeholder="Find Your Coffee..."
        style={styles.input}
        placeholderTextColor={colors.light}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  constainer: {
    marginRight: 30,
  },
  icon: {
    position: "absolute",
    top: 16,
    left: 15,
    zIndex: 2,
  },
  input: {
    backgroundColor: colors.medium,
    width: "100%",
    color: colors.white,
    padding: 15,
    paddingLeft: 60,
    fontSize: 18,
    borderRadius: 10,
    borderColor: colors.light,
    borderWidth: 1,
  },
})
