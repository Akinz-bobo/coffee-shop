import { ImageBackground, ScrollView, StyleSheet, View } from "react-native"
import React from "react"
import Screen from "../components/Screen"
import IconsGroup from "../components/IconsGroup"
import colors from "../utils/colors"
import AppText from "../components/AppText"
import Glass from "../components/Glass"
export default function OriginDetailScreen({ route }) {
  const item = route.params
  const image = item.cover_image[0]

  return (
    <Screen>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <ImageBackground
            esizeMode="cover"
            style={styles.image}
            source={{ uri: image }}
          >
            {/* <IconsGroup /> */}
            <Glass
              ratings={5}
              origin={item.origin}
              title={`${item.origin}'s Beans`}
            />
          </ImageBackground>
          <View style={styles.footer}>
            <View style={styles.description}>
              <AppText title="Description" style={{ fontSize: 20 }} />
              <AppText
                title={item.description}
                style={{ fontSize: 14, fontWeight: 400 }}
              />
            </View>
            <View style={{ marginTop: 20 }}></View>
          </View>
        </View>
      </ScrollView>
    </Screen>
  )
}
const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  image: {
    alignItems: "center",
    height: 500,
    paddingTop: 20,
  },
  description: {
    gap: 10,
  },

  size: {
    color: colors.white,
    fontSize: 16,
  },
  buttons: {
    flexDirection: "row",
    marginTop: 20,
    flexWrap: "wrap",
    gap: 10,
  },
  footer: {
    backgroundColor: colors.dark,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    height: "100%",
    marginBottom: 50,
  },
})
