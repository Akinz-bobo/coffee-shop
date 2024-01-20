import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native"
import React from "react"
import Screen from "../components/Screen"
import Logo from "../components/Logo"
import AppText from "../components/AppText"
import TextButton from "../components/TextButton"
import IconButton from "../components/IconButton"
import colors from "../utils/colors"
import Gallery from "../components/Gallery"
import { AntDesign } from "@expo/vector-icons"
import Menu from "../components/Menu"

export default function ShopDetailScreen({ route }) {
  const shop = route.params
  console.log(shop)
  return (
    <Screen style={styles.screen}>
      <ScrollView>
        <View style={{ gap: 20 }}>
          <Logo icon={true} />
          <View style={{ marginTop: 10 }}>
            <AppText title="ÖSS Kaffe" variant="bold" />
            <View style={styles.textContainer}>
              <AppText title="1234.5 KM" style={styles.text} color={true} />
              <AppText title="Closes at 23:00" style={styles.text} />
            </View>
          </View>
          <View style={styles.btnContainer}>
            <TextButton title="Direction" />
            <IconButton icon="heart" />
            <IconButton icon="sharealt" />
          </View>
          <View style={styles.description}>
            <AppText
              title="Deep within the challenges we face, lies the fertile ground for groundbreaking business ideas to blossom and thrive"
              style={{ fontSize: 14 }}
            />
          </View>
          <Gallery />
          <View style={styles.container}>
            <AppText title="Instagram" color={true} />
            <TouchableOpacity style={styles.title}>
              <AppText title="ÖSS Kaffe" color={true} />
              <AntDesign name="instagram" size={24} color={colors.primary} />
            </TouchableOpacity>
          </View>
          <Menu />
        </View>
      </ScrollView>
    </Screen>
  )
}

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    gap: 20,
    width: "90%",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignItems: "center",
  },

  description: {
    width: "90%",
  },
  screen: {
    paddingLeft: 20,
  },
  textContainer: {
    flexDirection: "row",
    width: 120,
    gap: 10,
  },
  text: {
    fontSize: 10,
  },
  title: {
    flexDirection: "row",
    gap: 10,
  },
})
