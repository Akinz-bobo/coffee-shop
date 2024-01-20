import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import { AntDesign } from "@expo/vector-icons"
import colors from "../utils/colors"
import { LinearGradient } from "expo-linear-gradient"
import { useNavigation } from "@react-navigation/native"

export default function BackButton() {
  const navigation = useNavigation()

  const handlePress = () => {
    navigation.goBack()
  }
  return (
    <LinearGradient
      colors={["rgba(38, 43, 51, 0.70)", "#252A32"]}
      locations={[0.4, 1]}
      start={{ x: 0.1, y: 0.2 }}
      style={styles.button}
    >
      <TouchableOpacity onPress={handlePress}>
        <AntDesign name="arrowleft" size={30} color={colors.light} />
      </TouchableOpacity>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 6,
    padding: 15,
    borderRadius: 10,
  },
})
