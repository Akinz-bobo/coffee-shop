import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import React, { useEffect, useState } from "react"
import colors from "../utils/colors"
import { FontAwesome } from "@expo/vector-icons"
import { AntDesign } from "@expo/vector-icons"
import { KEY } from "../../environment"
import axios from "axios"
import { useNavigation } from "@react-navigation/native"
import { TouchableOpacity } from "@gorhom/bottom-sheet"
import Constants from "expo-constants"
import { useMapContext } from "../contexts/MapCtx"

export default function ShopDetail({ route }) {
  const { onPlaceSelected, closeBottomSheet } = useMapContext()
  const navigation = useNavigation()
  const [shop, setShop] = useState(null)
  const WeekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  async function getBusinessDetails(id) {
    try {
      const response = await axios.get(
        `https://api.yelp.com/v3/businesses/${id}`,
        {
          headers: {
            Authorization: `Bearer ${KEY.YELP_API_KEY}`,
          },
        }
      )
      onPlaceSelected(response.data.coordinates)
      setShop(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getBusinessDetails(route?.params?.id)
  }, [])
  if (!shop) return
  function extractServices(array) {
    const services = []
    for (let i = 0; i < array.length; i++) {
      let name = array[i].title
      services.push(name)
    }
    return services.join(", ")
  }

  const onPressHandler = () => {
    onPlaceSelected(shop.coordinates)
    navigation.navigate("MapScreen")
    closeBottomSheet()
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={[styles.container, { width: "100%" }]}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "90%",
            justifyContent: "space-between",
          }}
        >
          <View
            style={[
              styles.wraper,
              {
                alignItems: "flex-start",
                width: "60%",
                flexWrap: "wrap",
              },
            ]}
          >
            <Text style={styles.title}>{shop?.name}</Text>
            <FontAwesome name="coffee" size={24} color={colors.primary} />
          </View>
          <TouchableOpacity onPress={onPressHandler} style={styles.button}>
            <AntDesign name="enviromento" size={24} color={colors.primary} />
            <Text style={[styles.text, { color: colors.primary }]}>
              Direction
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.wraper, { marginBottom: 10 }]}>
          <FontAwesome name="map-marker" size={24} color="white" />
          <Text style={styles.text}>
            {shop.location.display_address.join(",")}
          </Text>
        </View>
        <View>
          <Image source={{ uri: shop.image_url }} style={styles.cover_image} />
          <View style={styles.images}>
            {shop?.photos?.map((pic, i) => (
              <Image style={styles.image} source={{ uri: pic }} key={i} />
            ))}
          </View>
        </View>
        <View
          style={[
            styles.wraper,
            { flexDirection: "column", alignItems: "flex-start" },
          ]}
        >
          <Text style={styles.heading}>Services</Text>
          <Text style={styles.text}>{extractServices(shop.categories)}</Text>
        </View>
        <View
          style={[
            styles.wraper,
            { flexDirection: "column", alignItems: "flex-start" },
          ]}
        >
          <Text style={styles.heading}>Contact Info:</Text>
          <Text style={styles.text}>{shop.phone}</Text>
        </View>
        <View>
          <Text style={styles.heading}>Operational Days</Text>
          <View style={styles.table}>
            <Text style={styles.th}>Day</Text>
            <Text style={styles.th}>Opens At</Text>
            <Text style={styles.th}>Closes At</Text>
          </View>

          {shop?.hours[0].open.map((item, i) => (
            <View key={i} style={styles.table}>
              <Text style={styles.tr}>{WeekDays[item.day]}</Text>
              <Text style={styles.tr}>{`${item.start.slice(0, 2)}:00`}</Text>
              <Text style={styles.tr}>{`${item.end.slice(0, 2)}:00`}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    width: 110,
    borderColor: colors.primary,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    gap: 5,
  },
  container: {
    paddingTop: Constants.statusBarHeight,
    alignItems: "center",
    marginTop: 10,
    gap: 10,
    marginBottom: 40,
  },
  cover_image: {
    height: 200,
    width: 350,
    objectFit: "cover",
    borderRadius: 10,
  },
  heading: {
    fontSize: 20,
    color: "white",
    marginBottom: 5,
  },
  images: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    height: 120,
    gap: 10,
  },
  image: {
    width: 110,
    height: 120,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.primary,
    textTransform: "capitalize",
    marginBottom: 10,
  },
  text: {
    color: colors.light,
  },
  table: {
    flexDirection: "row",
  },
  th: {
    fontSize: 18,
    fontWeight: "600",
    width: 110,
    color: "white",
    marginBottom: 5,
  },
  tr: {
    width: 110,
    color: colors.light,
  },
  wraper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    width: "85%",
  },
})
