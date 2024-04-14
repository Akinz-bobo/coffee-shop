import { StyleSheet, TextInput, View } from "react-native"
import React from "react"
import { EvilIcons } from "@expo/vector-icons"
import colors from "../utils/colors"
import TextButton from "./TextButton"

export default function AppTextInput({ onChange, searchText, isSearching }) {
  return (
    <View style={styles.constainer}>
      <EvilIcons
        name="search"
        size={30}
        color={colors.light}
        style={styles.icon}
      />
      <TextInput
        placeholder="Find Your Coffee..."
        style={styles.input}
        placeholderTextColor={colors.light}
        value={searchText}
        onChangeText={onChange}
      />
      {/* <TextButton
        title={isSearching ? "Searching..." : "Search"}
        onPress={searchHandler}
        style={{
          borderRadius: 5,
          width: "40%",

          backgroundColor: colors.primary,
        }}
      /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    gap: 10,
    width: "95%",
    alignItems: "center",
  },
  icon: {
    position: "absolute",
    top: 16,
    left: 15,
    zIndex: 2,
  },
  input: {
    backgroundColor: colors.medium,
    width: "100%",
    color: colors.white,
    padding: 15,
    paddingLeft: 45,
    fontSize: 16,
    borderRadius: 10,
    borderColor: colors.primary,
    borderWidth: 1,
  },
})
