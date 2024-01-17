import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { SimpleLineIcons } from "@expo/vector-icons"

import React from "react"

import colors from "../utils/colors"

export default function IconButton({ icon, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <SimpleLineIcons name={icon} size={30} color={colors.light} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 15,
    backgroundColor: colors.medium,
  },
})
