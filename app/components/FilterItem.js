import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native"
import React from "react"
import colors from "../utils/colors"

export default function FilterItem({ title, onPress, active }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.filterContainer}>
        <Text
          style={[
            styles.item,
            { color: active ? colors.primary : colors.light },
          ]}
        >
          {title}
        </Text>
        {active && <View style={styles.dot}></View>}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  filterContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  item: {
    fontWeight: "600",
    fontSize: 18,
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },
})
