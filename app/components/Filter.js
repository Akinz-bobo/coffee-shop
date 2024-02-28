import { StyleSheet, Text, View } from "react-native"
import React, { useState } from "react"
import FilterItem from "./FilterItem"
import { useNavigation } from "@react-navigation/native"

export default function Filter() {
  const navigation = useNavigation()
  const [activeIndex, setActiveIndex] = useState(0)
  const tabs = ["All", "Origin", "Favorite", "Special"]
  const pressHandler = index => {
    setActiveIndex(index)
    if (index === 0) return
    if (index === 2) {
      navigation.navigate("Favorite")
    }
  }
  return (
    <View style={styles.container}>
      {tabs.map((tab, i) => (
        <FilterItem
          key={i}
          title={tab}
          active={activeIndex === i ? true : false}
          onPress={() => pressHandler(i)}
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "80%",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
})
