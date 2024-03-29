import { StyleSheet, Text, View } from "react-native"
import React from "react"
import AppText from "./AppText"
import colors from "../utils/colors"

export default function Menu({ menu }) {
  let coffeeTypes = menu.reduce(
    (prev, cur, index) => prev + (cur.menuItem.toLowerCase() + " ,"),
    ""
  )
  coffeeTypes = coffeeTypes.charAt(0).toUpperCase() + coffeeTypes.slice(1)
  return (
    <View style={styles.container}>
      <AppText title="Coffee Type" variant="bold" />
      <AppText
        title={coffeeTypes.slice(0, -1)}
        style={{ fontSize: 14, color: colors.light }}
      />
      <AppText title="Price" variant="bold" />
      <View style={styles.menu}>
        {menu.map(menuItem => (
          <View key={menuItem.id} style={styles.menuItem}>
            <Text style={styles.text}>{menuItem.menuItem}</Text>
            <AppText title={menuItem.price + "€"} color={true} />
          </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  menu: {
    gap: 10,
    width: "90%",
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: colors.light,
    borderBottomWidth: 1,
    borderStyle: "dashed",
  },
  text: {
    color: colors.white,
  },
})
