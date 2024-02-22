import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native"
import React, { useState } from "react"
import Screen from "../components/Screen"
import colors from "../utils/colors"
import AppTextInput from "../components/AppTextInput"
import Filter from "../components/Filter"
import GradientCard from "../components/GradientCard"
import GradientWrapper from "../components/GradientWrapper"
import ListRenderer from "../components/ListRenderer"
import Logo from "../components/Logo"
import AppText from "../components/AppText"
import { useGetOrigin, useGetShops } from "../hooks/fetch"

// const origins = [
//   {
//     id: 1,
//     image: require("../assets/products/coffee.jpg"),
//     title: "Rwanda Beans",
//     origin: "From Africa",
//     description:
//       "The rwanda beans is highly durable and it come with a satisfying taste.",
//   },
//   {
//     id: 2,
//     image: require("../assets/products/coffee.jpg"),
//     title: "Rwanda Beans",
//     origin: "From Africa",
//     description:
//       "The rwanda beans is highly durable and it come with a satisfying taste.",
//   },
//   {
//     id: 3,
//     image: require("../assets/products/coffee.jpg"),
//     title: "Rwanda Beans",
//     origin: "From Africa",
//     description:
//       "The rwanda beans is highly durable and it come with a satisfying taste.",
//   },
//   {
//     id: 4,
//     image: require("../assets/products/coffee.jpg"),
//     title: "Rwanda Beans",
//     origin: "From Africa",
//     description:
//       "The rwanda beans is highly durable and it come with a satisfying taste.",
//   },
// ]

// const shops = [
//   {
//     id: 1,
//     image: require("../assets/shops/Kaffe.jpg"),
//     title: "ÖSS Kaffe",
//     distance: "1234.5",
//     stars: 4.5,
//     totalRatings: "6,879",
//     icon: "heart",
//   },
//   {
//     id: 2,
//     image: require("../assets/shops/Kaffe.jpg"),
//     title: "Nomad Coffee",
//     distance: "1234.5",
//     stars: 4.5,
//     totalRatings: "6,879",
//     icon: "heart",
//   },
//   {
//     id: 3,
//     image: require("../assets/shops/Kaffe.jpg"),
//     title: "ÖSS Kaffe",
//     distance: "1234.5",
//     stars: 4.5,
//     totalRatings: "6,879",
//     icon: "heart",
//   },
//   {
//     id: 4,
//     image: require("../assets/shops/Kaffe.jpg"),
//     title: "Nomad Coffee",
//     distance: "1234.5",
//     stars: 4.5,
//     totalRatings: "6,879",
//     icon: "heart",
//   },
// ]

const suggestion = [
  { title: "Rwanda", id: 1 },
  { title: "Burundi", id: 2 },
  { title: "Rwanda", id: 3 },
  { title: "Ethiopia", id: 4 },
  { title: "Congo", id: 5 },
  { title: "Tanzania", id: 6 },
  { title: "Uganda", id: 7 },
  { title: "Kenya", id: 8 },
]
export default function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState()
  const {getShops,shops} = useGetShops()
  const {getorigin,origin} = useGetOrigin()
  const dummyShopCover = "https://media.gettyimages.com/id/1428594094/photo/empty-coffee-shop-interior-with-wooden-tables-coffee-maker-pastries-and-pendant-lights.jpg?s=612x612&w=gi&k=20&c=Tu0dyFuw3p1UDS_I19ifEvqOxPqWzLKqIx0S-6uYCqA="
  return (
    <Screen style={styles.container}>
      <ScrollView>
        <View style={styles.screen}>
          <Logo />
          <AppText title="Find the best coffee for you" variant="bold" />
          <AppTextInput onChange={setModalVisible} />

          <View style={styles.textInputContainer}>
            <Filter />

            {modalVisible && (
              <GradientWrapper modalVisible={modalVisible}>
                <ListRenderer data={suggestion} />
              </GradientWrapper>
            )}

            {!modalVisible && (
              <View>
                {origin.length > 0 ? <FlatList
                  horizontal
                  data={origin}
                  keyExtractor={data => data._id.toString()}
                  renderItem={({ item }) => (
                    <GradientCard
                      image={item.cover_image[0]}
                      title={item.origin + " Beans" }
                      decription={item.description}
                      origin={item.origin}
                      onPress={() => navigation.navigate("Origin", item)}
                    />
                  )}
                />:<AppText title="Loading..."/>}
              </View>
            )}
            <View>
              {shops.length > 0 ? <FlatList
                horizontal
                data={shops}
                keyExtractor={data => data._id}
                renderItem={({ item }) => (
                  <GradientCard
                    distance={2000}
                    totalRatings={item.ratingCount}
                    decription={item.description.split(0,20)+"..."}
                    image={item.cover_image[0]}
                    // origin={item.origin}

                    stars={item.rating}
                    title={item.shop_name}
                    icon={"heart"}
                    onPress={() => navigation.navigate("Shop", item)}
                  />
                )}
              />:<AppText title="Loading..."/>}
            </View>
          </View>
        </View>
      </ScrollView>
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    gap: 20,
  },
  container: {
    paddingLeft: 20,
  },
  text: {
    color: colors.white,
    fontSize: 30,
    fontWeight: "700",
    width: "60%",
  },
  textInputContainer: {
    flex: 1,
    gap: 20,
  },
})
