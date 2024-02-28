import { View, Text, StyleSheet } from "react-native"
import React from "react"
import { useGetShops } from "../hooks/fetch"
import colors from "../utils/colors"
import { TouchableOpacity } from "@gorhom/bottom-sheet"
import { useNavigation } from "@react-navigation/native"
import axios from "axios"
export default function Suggestions({ shops }) {
  const nav = useNavigation()
  // console.log(shops)
  return (
    <View style={{ paddingTop: 15, paddingRight: 15, gap: 10 }}>
      {shops.map(item => (
        <TouchableOpacity
          onPress={e => {
            // try {
            //   const detailedData = await axios.get(
            //     "https://api.yelp.com/v3/businesses/" + item.id
            //   )
            nav.navigate("DetailedScreen", { id: item.id })
            // } catch (e) {}
          }}
          key={item.id}
          style={styles.item}
        >
          <Text style={styles.shop_name}>{item.name}</Text>
          <View style={styles.text}>
            <View style={styles.text}>
              <Text style={{ color: colors.light, fontSize: 10 }}>
                {Math.floor(item.distance)}
              </Text>
              <Text style={{ color: colors.primary, fontSize: 10 }}>KM</Text>
            </View>
            <View style={styles.text}>
              <Text style={{ color: colors.light, fontSize: 10 }}>
                {item.phone}
              </Text>
              <Text style={{ color: colors.light, fontSize: 10 }}>
                {item.rating}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
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
    marginBottom: 2,
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
