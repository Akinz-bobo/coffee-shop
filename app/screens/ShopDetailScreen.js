import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Linking,
  Text,
} from "react-native"
import React, { useEffect, useState } from "react"
import Screen from "../components/Screen"
import Logo from "../components/Logo"
import AppText from "../components/AppText"
import IconButton from "../components/IconButton"
import colors from "../utils/colors"
import Gallery from "../components/Gallery"
import { AntDesign } from "@expo/vector-icons"
import { FontAwesome } from "@expo/vector-icons"
import Menu from "../components/Menu"
import { useFavouritesStore } from "../hooks/localStorage"
import { useFavouriteCtx } from "../contexts/FavouritesCtx"
import TextButton from "../components/TextButton"
import { useSpecialMapContext } from "../contexts/SpecialMapCtx"
import { useNavigation } from "@react-navigation/native"
import axios from "axios"
import { KEY } from "../../environment"
import { request } from "../utils/constants"

export default function ShopDetailScreen({ route }) {
  const { params } = route
  console.log(params)
  const [shop, setShop] = useState(null)

  // get shop details

  // console.log(KEY)
  useEffect(() => {
    async function getShopDeTail() {
      try {
        const response = await request.get("/shops?id=" + params._id)
        console.log(response.data)
        setShop(response.data)
      } catch (error) {
        console.log(error.message)
      }
    }

    getShopDeTail()
  }, [])
  const { onPlaceSelected } = useSpecialMapContext()
  const navigation = useNavigation()
  const onPressHandler = () => {
    navigation.navigate("SpecialMap")
    onPlaceSelected({
      latitude: shop.lat,
      longitude: shop.long,
    })
  }
  if (!shop) return
  return (
    <Screen style={styles.screen}>
      <ScrollView>
        <View style={{ gap: 15 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "95%",
              justifyContent: "space-between",
              // backgroundColor: "red",
            }}
          >
            <View
              style={[
                // styles.wraper,
                {
                  flexDirection: "row",
                  gap: 5,
                  alignItems: "flex-start",
                  width: "60%",
                  flexWrap: "wrap",
                },
              ]}
            >
              <AppText title={shop.shop_name} variant="bold" color={true} />
              <FontAwesome name="coffee" size={24} color={colors.primary} />
            </View>
            <TouchableOpacity onPress={onPressHandler} style={styles.button}>
              <AntDesign name="enviromento" size={24} color={colors.primary} />
              <Text
                style={[styles.text, { color: colors.primary, fontSize: 14 }]}
              >
                Direction
              </Text>
            </TouchableOpacity>
          </View>
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
          {/* Address */}
          <View style={[styles.wraper, { marginBottom: 10 }]}>
            <FontAwesome name="map-marker" size={24} color="white" />
            <Text style={{ color: colors.light }}>
              Universal location new-jersey London
            </Text>
          </View>

          <Gallery
            cover_image={shop.cover_image[0]}
            image1={shop.images[0]}
            image2={shop.images[1]}
          />
          <View style={styles.description}>
            <AppText title={"Description"} variant="bold" />
            <AppText
              title={shop.description}
              style={{ fontSize: 14, color: colors.light }}
            />
          </View>
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
  button: {
    flexDirection: "row",
    alignItems: "center",
    width: 110,
    borderColor: colors.primary,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    gap: 5,
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
    fontSize: 12,
  },
  title: {
    flexDirection: "row",
    gap: 10,
  },
  wraper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    width: "85%",
  },
})
