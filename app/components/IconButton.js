import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { AntDesign } from "@expo/vector-icons"

import React from "react"

import colors from "../utils/colors"

export default function IconButton({ icon, onPress, color }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <AntDesign name={icon} size={30} color={color ? color : colors.light} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.medium,
  },
})
