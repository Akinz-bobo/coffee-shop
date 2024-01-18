import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

import React from "react"

import colors from "../utils/colors"

export default function TextButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 15,
    flex: 1,
    backgroundColor: colors.medium,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    color: colors.light,
  },
})
