import { StyleSheet, Text, View } from "react-native"
import React from "react"
import { Marker } from "react-native-maps"

export default function AppMarker() {
  return (
    <Marker>
      <View>
        <Text>App</Text>
      </View>
    </Marker>
  )
}

const styles = StyleSheet.create({})
