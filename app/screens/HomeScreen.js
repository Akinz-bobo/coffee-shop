import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native"
import React from "react"
import Screen from "../components/Screen"
import colors from "../utils/colors"
import AppTextInput from "../components/AppTextInput"
import Filter from "../components/Filter"
import GradientCard from "../components/GradientCard"

const origins = [
  {
    id: 1,
    image: require("../assets/products/coffee.jpg"),
    title: "Rwanda Beans",
    origin: "From Africa",
    description:
      "The rwanda beans is highly durable and it come with a satisfying taste.",
  },
  {
    id: 2,
    image: require("../assets/products/coffee.jpg"),
    title: "Rwanda Beans",
    origin: "From Africa",
    description:
      "The rwanda beans is highly durable and it come with a satisfying taste.",
  },
  {
    id: 3,
    image: require("../assets/products/coffee.jpg"),
    title: "Rwanda Beans",
    origin: "From Africa",
    description:
      "The rwanda beans is highly durable and it come with a satisfying taste.",
  },
  {
    id: 4,
    image: require("../assets/products/coffee.jpg"),
    title: "Rwanda Beans",
    origin: "From Africa",
    description:
      "The rwanda beans is highly durable and it come with a satisfying taste.",
  },
]

const shops = [
  {
    id: 1,
    image: require("../assets/shops/Kaffe.jpg"),
    title: "ÖSS Kaffe",
    distance: "1234.5",
    stars: 4.5,
    totalRatings: "6,879",
    icon: "heart",
  },
  {
    id: 2,
    image: require("../assets/shops/Kaffe.jpg"),
    title: "Nomad Coffee",
    distance: "1234.5",
    stars: 4.5,
    totalRatings: "6,879",
    icon: "heart",
  },
  {
    id: 3,
    image: require("../assets/shops/Kaffe.jpg"),
    title: "ÖSS Kaffe",
    distance: "1234.5",
    stars: 4.5,
    totalRatings: "6,879",
    icon: "heart",
  },
  {
    id: 4,
    image: require("../assets/shops/Kaffe.jpg"),
    title: "Nomad Coffee",
    distance: "1234.5",
    stars: 4.5,
    totalRatings: "6,879",
    icon: "heart",
  },
]

export default function HomeScreen() {
  return (
    <ScrollView>
      <Screen style={styles.container}>
        <View style={styles.logoContainter}>
          <Image source={require("../assets/logo.jpg")} style={styles.logo} />
        </View>
        <Text style={styles.text}>Find the best coffee for you</Text>
        <AppTextInput />
        <Filter />
        <View>
          <FlatList
            horizontal
            data={origins}
            keyExtractor={data => data.id.toString()}
            renderItem={({ item }) => (
              <GradientCard
                image={item.image}
                title={item.title}
                decription={item.description}
                origin={item.origin}
                onPress={() => console.log("Item selected: ", item)}
              />
            )}
          />
        </View>
        <View>
          <FlatList
            horizontal
            data={shops}
            keyExtractor={data => data.id.toString()}
            renderItem={({ item }) => (
              <GradientCard
                distance={item.distance}
                totalRatings={item.totalRatings}
                decription={item.description}
                image={item.image}
                origin={item.origin}
                stars={item.stars}
                title={item.title}
                icon={item.icon}
                onPress={() => console.log("Item selected: ", item)}
              />
            )}
          />
        </View>
      </Screen>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
  },
  logo: {
    height: 40,
    width: 40,
  },
  logoContainter: {
    width: "90%",
    justifyContent: "flex-end",
    flexDirection: "row",
  },

  text: {
    color: colors.white,
    fontSize: 30,
    fontWeight: "700",
    width: "60%",
  },
})
