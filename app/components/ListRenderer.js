import { FlatList, StyleSheet, Text, View } from "react-native"
import React from "react"
import colors from "../utils/colors"

export default function ListRenderer({ data }) {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={data}
        keyExtractor={data => data.id}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.text}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: "100%",
  },

  text: {
    color: colors.white,
    fontSize: 20,
    marginTop: 20,
  },
})
