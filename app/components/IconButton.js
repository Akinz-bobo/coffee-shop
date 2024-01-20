import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { AntDesign } from "@expo/vector-icons"

import React from "react"

import colors from "../utils/colors"

export default function IconButton({ icon, onPress, color }) {
  return (
    <View style={styles.button}>
      <TouchableOpacity onPress={onPress}>
        <AntDesign name={icon} size={30} color={color ? color : colors.light} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.medium,
  },
})
