import { View, Text, StyleSheet } from "react-native"
import React from "react"
import { useGetShops } from "../hooks/fetch"
import colors from "../utils/colors"

export default function Suggestions({ shops }) {
  return (
    <View style={{ paddingTop: 15, paddingRight: 15 }}>
      {shops.map(item => (
        <View key={item._id} style={styles.item}>
          <Text style={styles.shop_name}>{item.shop_name}</Text>
          <View style={styles.text}>
            <View style={styles.text}>
              <Text style={{ color: colors.light, fontSize: 10 }}>123,4</Text>
              <Text style={{ color: colors.primary, fontSize: 10 }}>KM</Text>
            </View>
            <View style={styles.text}>
              <Text style={{ color: colors.light, fontSize: 10 }}>
                Works Till
              </Text>
              <Text style={{ color: colors.light, fontSize: 10 }}>
                {item.closing_hour}
              </Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  shop_name: {
    fontWeight: "600",
    fontSize: 14,
    color: "white",
    maxWidth: "55%",
  },
  text: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
  },
})
