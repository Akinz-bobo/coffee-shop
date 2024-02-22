import { StyleSheet, Text, View } from "react-native"
import React, { useState } from "react"
import FilterItem from "./FilterItem"

export default function Filter() {
  const [activeIndex, setActiveIndex] = useState(0)
  const tabs = ["All", "Origin", "Favorite", "Special"]
  const pressHandler = index => {
    setActiveIndex(index)
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
