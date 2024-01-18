import { Platform, SafeAreaView, StyleSheet, View } from "react-native"
import React from "react"
import Constants from "expo-constants"
import colors from "../utils/colors"

export default function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={styles.screen}>{children}</View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.dark,
    paddingTop: Constants.statusBarHeight,
    gap: 20,
    paddingBottom: 60,
    minHeight: "100%",
  },
})
