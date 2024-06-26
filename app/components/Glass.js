import { StyleSheet, Text, View } from "react-native"
import React from "react"
import AppText from "./AppText"
import colors from "../utils/colors"
import { AntDesign } from "@expo/vector-icons"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Ionicons } from "@expo/vector-icons"
export default function Glass({ ratings, origin, title }) {
  return (
    <View style={styles.container}>
      <View>
        <AppText title={title} style={{ fontSize: 20 }} />
        <AppText
          title={`From ${origin}`}
          style={{ fontSize: 14, fontWeight: 400 }}
        />
        <View style={{ flexDirection: "row", marginTop: 20, gap: 5 }}>
          <AntDesign name="star" size={24} color={colors.primary} />
          <Text style={{ color: colors.white, fontWeight: 600, fontSize: 18 }}>
            {ratings || "4.5"}
          </Text>
          <Text style={{ color: colors.light }}>(6,879)</Text>
        </View>
      </View>
      <View>
        <View style={{ flexDirection: "row", gap: 20 }}>
          <View style={styles.icon}>
            <MaterialCommunityIcons
              name="seed"
              size={30}
              color={colors.primary}
            />
            <Text
              style={{ color: colors.white, fontSize: 16, fontWeight: 600 }}
            >
              Beans
            </Text>
          </View>
          <View style={styles.icon}>
            <Ionicons name="location-sharp" size={30} color={colors.primary} />
            <Text
              style={{ color: colors.white, fontSize: 16, fontWeight: 600 }}
            >
              {origin}
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.50)",
    left: 0,
    width: "100%",
    padding: 30,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  texts: {},
  icon: {
    backgroundColor: colors.medium,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    alignItems: "center",
  },
})
