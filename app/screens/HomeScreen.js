import { FlatList, ScrollView, StyleSheet, View } from "react-native"
import React, { useEffect, useState } from "react"
import Screen from "../components/Screen"
import colors from "../utils/colors"
import AppTextInput from "../components/AppTextInput"
import GradientCard from "../components/GradientCard"
import GradientWrapper from "../components/GradientWrapper"
import Logo from "../components/Logo"
import AppText from "../components/AppText"
import Suggestions from "../components/Suggestions"
import Loading from "../assets/lottie/Loading"
import axios from "axios"
import { KEY } from "../../environment"
export default function HomeScreen({ navigation, route }) {
  const { shops, origins: origin } = route.params
  const [searchText, setSearchText] = useState("")
  const [searching, setSearching] = useState(false)
  const [shopData, setShopData] = useState([])

  function debounce(func, timeout = 500) {
    let timer
    return (...args) => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        func.apply(this, args)
      }, timeout)
    }
  }
  async function saveInput(value) {
    // make API call
    if (value === "") {
      return setShopData([])
    }
    try {
      setSearching(true)
      const location = "San Francisco, CA"
      const term = value + " Coffee Shop"
      const response = await axios.get(
        ` https://api.yelp.com/v3/businesses/search?sort_by=best_match&limit=10`,
        {
          headers: {
            Authorization: `Bearer ${KEY.YELP_API_KEY}`,
          },
          params: {
            term,
            location,
          },
        }
      )
      setShopData(val => response.data.businesses)
    } catch (error) {
      console.log(error.message)
    }
    setSearching(false)
    return
  }
  const processChange = debounce(val => saveInput(val))

  return (
    <Screen style={styles.container}>
      <ScrollView>
        <View style={styles.screen}>
          <Logo />
          <AppText title="Find the best coffee for you" variant="bold" />

          <AppTextInput
            onChange={processChange}
            value={searchText}
            isSearching={searching}
          />

          <View style={styles.textInputContainer}>
            {/* <Filter /> */}
            {shopData.length > 0 && (
              <View
                style={{
                  height: 350,
                  flex: 1,
                  width: "100%",
                }}
              >
                <GradientWrapper
                  modalVisible={shopData.length > 0}
                  style={{
                    paddingLeft: 10,
                    flex: 1,
                    position: "absolute",
                    zIndex: 10,
                    backgroundColor: colors.dark,
                  }}
                >
                  <Suggestions shops={shopData} />
                </GradientWrapper>
              </View>
            )}
            {!shopData.length > 0 && (
              <View>
                <AppText title={"Origin"} style={{ marginBottom: 16 }} />

                {origin.length > 0 ? (
                  <FlatList
                    horizontal
                    data={origin}
                    keyExtractor={data => data._id.toString()}
                    renderItem={({ item }) => (
                      <GradientCard
                        image={item.cover_image[0]}
                        title={item.origin + " Beans"}
                        decription={item.description}
                        origin={item.origin}
                        onPress={() => navigation.navigate("Origin", item)}
                      />
                    )}
                  />
                ) : (
                  !origin.length > 0 && <Loading />
                )}
              </View>
            )}

            <View>
              <AppText
                title={"Speciality Coffee"}
                style={{ marginBottom: 16 }}
              />

              {shops.length > 0 ? (
                <FlatList
                  horizontal
                  data={shops}
                  keyExtractor={(data, i) => data._id.toString() + i}
                  renderItem={({ item, index }) => (
                    <GradientCard
                      distance={2000}
                      totalRatings={item.ratingCount}
                      decription={item.description.split(0, 20) + "..."}
                      image={item.cover_image[0]}
                      id={item._id}
                      stars={item.rating}
                      title={item.shop_name}
                      icon={"heart"}
                      onPress={() => navigation.navigate("Shop", item)}
                    />
                  )}
                />
              ) : (
                !shops.length > 0 && <Loading />
              )}
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
    // height: "100%",
  },
})
