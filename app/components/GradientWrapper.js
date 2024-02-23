import { Modal, StyleSheet, Alert, View } from "react-native"
import React from "react"
import { LinearGradient } from "expo-linear-gradient"

export default function GradientWrapper({ children, modalVisible, style }) {
  return (
    <>
      {modalVisible && (
        <View>
          <LinearGradient
            colors={["rgba(38, 43, 51, 0.70)", "#252A32"]}
            locations={[0.4, 1]}
            start={{ x: 0.1, y: 0.2 }}
            style={[styles.container, style]}
          >
            {children}
          </LinearGradient>
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    borderRadius: 10,
    paddingLeft: 20,
    paddingBottom: 20,
    height: 350,
    maxHeight: 350,
    flex: 1,
    overflow: "scroll",
  },
})
