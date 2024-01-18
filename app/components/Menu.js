import { StyleSheet, Text, View } from "react-native"
import React from "react"
import AppText from "./AppText"
import colors from "../utils/colors"

export default function Menu() {
  const menu = [
    {
      item: "Espresso",
      price: "3.50€",
    },
    {
      item: "Cappuccino",
      price: "4.50€",
    },
    {
      item: "Black Coffee",
      price: "3.50€",
    },
    {
      item: "Flat White",
      price: "5.50€",
    },
    {
      item: "Latte/Iced Latte",
      price: "3.50€",
    },
  ]
  return (
    <View style={styles.container}>
      <AppText title="Coffee Type" variant="bold" />
      <AppText
        title="Cappuccino, Espresso, Flat White, Latte/Iced Latte, Black Coffee"
        style={{ fontSize: 14, color: colors.light }}
      />
      <AppText title="Price" variant="bold" />
      <View style={styles.menu}>
        {menu.map(menuItem => (
          <View key={menuItem.item} style={styles.menuItem}>
            <Text style={styles.text}>{menuItem.item}</Text>
            <AppText title={menuItem.price} color={true} />
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
    // borderBottomWidth: "1px",
    borderBottomWidth: 1,
    borderStyle: "dashed",
  },
  text: {
    color: colors.white,
  },
})
