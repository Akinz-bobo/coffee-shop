import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Linking,
  Dimensions,
} from "react-native"
import React from "react"
import Screen from "../components/Screen"
import Logo from "../components/Logo"
import AppText from "../components/AppText"
import IconButton from "../components/IconButton"
import colors from "../utils/colors"
import Gallery from "../components/Gallery"
import { AntDesign } from "@expo/vector-icons"
import Menu from "../components/Menu"
import { useFavouritesStore } from "../hooks/localStorage"
import { useFavouriteCtx } from "../contexts/FavouritesCtx"
import TextButton from "../components/TextButton"
import { useSpecialMapContext } from "../contexts/SpecialMapCtx"
import { useNavigation } from "@react-navigation/native"

export default function ShopDetailScreen({ route }) {
  const shop = route.params
  // console.log(shop)
  const { fav, toggleFavouriteStore } = useFavouritesStore(shop._id)
  const { getFav } = useFavouriteCtx()
  const { onPlaceSelected, SpecialMapRef } = useSpecialMapContext()
  const navigation = useNavigation()
  const onPressHandler = () => {
    navigation.navigate("SpecialMap")
    onPlaceSelected({
      latitude: shop.lat,
      longitude: shop.long,
    })
  }
  return (
    <Screen style={styles.screen}>
      <ScrollView>
        <View style={{ gap: 20 }}>
          <Logo icon={true} />
          <View style={{ marginTop: 10 }}>
            <AppText title={shop.shop_name} variant="bold" />
            <View style={styles.textContainer}>
              <AppText
                title={`Open at ${shop.opening_hour}`}
                style={styles.text}
                color={true}
              />
              <AppText
                title={`Closes at ${shop.closing_hour}`}
                style={styles.text}
              />
            </View>
          </View>
          <View style={styles.btnContainer}>
            <TextButton
              onPress={onPressHandler}
              title="Direction"
              style={{
                borderRadius: 5,
              }}
            />
            <IconButton
              onPress={async e => {
                await toggleFavouriteStore(shop)
                getFav()
              }}
              color={fav && "red"}
              icon="heart"
            />
          </View>
          <View style={styles.description}>
            <AppText title={shop.description} style={{ fontSize: 14 }} />
          </View>
          <Gallery
            cover_image={shop.cover_image[0]}
            image1={shop.images[0]}
            image2={shop.images[1]}
          />

          {shop.hasOwnProperty("social_link") ? (
            <View style={styles.container}>
              <AppText title="Instagram" color={true} />
              <TouchableOpacity
                onPress={async e =>
                  Linking.openURL(
                    shop.social_link.includes("http://") ||
                      shop.social_link.includes("https://")
                      ? shop.social_link
                      : `https://www.google.com/search?q=${shop.social_link}`
                  )
                }
                style={styles.title}
              >
                <AppText title={shop.shop_name} color={true} />
                <AntDesign name="instagram" size={24} color={colors.primary} />
              </TouchableOpacity>
            </View>
          ) : null}
          <Menu menu={shop.menu} />
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
