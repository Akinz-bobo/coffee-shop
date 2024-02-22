import { StyleSheet, TextInput, View } from "react-native"
import React from "react"
import { EvilIcons } from "@expo/vector-icons"
import colors from "../utils/colors"

export default function AppTextInput({ onChange, searchText }) {
  // const handleChange = ({ nativeEvent: { text } }) => {
  //   if (text) {
  //     onChange(true)
  //   } else {
  //     onChange(false)
  //   }
  // }

  // Debounce function
  const debounce = (func, delay) => {
    let timeoutId
    return function () {
      const context = this
      const args = arguments
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        func.apply(context, args)
      }, delay)
    }
  }

  // Function to handle the debounced search
  const handleDebouncedSearch = debounce(text => {
    onChange(text)
  }, 300)

  return (
    <View style={styles.constainer}>
      <EvilIcons
        name="search"
        size={35}
        color={colors.light}
        style={styles.icon}
      />
      <TextInput
        placeholder="Find Your Coffee..."
        style={styles.input}
        placeholderTextColor={colors.light}
        onChangeText={text => handleDebouncedSearch(text)}
        value={searchText}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  constainer: {
    marginRight: 30,
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
    paddingLeft: 60,
    fontSize: 18,
    borderRadius: 10,
    borderColor: colors.light,
    borderWidth: 1,
  },
})
