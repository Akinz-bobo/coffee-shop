import { Button, FlatList, ScrollView, StyleSheet, View } from "react-native"
import React, { useCallback, useEffect, useState } from "react"
import Screen from "../components/Screen"
import colors from "../utils/colors"
import AppTextInput from "../components/AppTextInput"
import Filter from "../components/Filter"
import GradientCard from "../components/GradientCard"
import GradientWrapper from "../components/GradientWrapper"
import Logo from "../components/Logo"
import AppText from "../components/AppText"
import { useGetOrigin, useGetShops } from "../hooks/fetch"
import Suggestions from "../components/Suggestions"
import Loading from "../assets/lottie/Loading"
import TextButton from "../components/TextButton"
import axios from "axios"
import { KEY } from "../../environment"
export default function HomeScreen({ navigation, route }) {
  const { shops, origins: origin } = route.params
  const [modalVisible, setModalVisible] = useState(false)
  // const { shops } = useGetShops()
  // const { origin } = useGetOrigin()
  const [searchText, setSearchText] = useState("")
  const [searching, setSearching] = useState(false)
  const [shopData, setShopData] = useState([])
  const filterShop = async () => {
    console.log(searchText)
    if (searchText.length > 0) {
      // setShopData(al =>
      //   shops.filter(v =>
      //     v.shop_name.toLowerCase().includes(searchText.toLowerCase())
      //   )
      // )
      try {
        console.log("pressed")
        setSearching(true)
        const location = "San Francisco, CA"
        const term = searchText + " Coffee Shop"
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
        // console.log(response.data.businesses)
        setShopData(val => response.data.businesses)
      } catch (error) {
        console.log(error.message)
      }
      setSearching(false)
      return
    }
  }
  // console.log(shopData)
  // useEffect(() => {
  //   filterShop()
  // }, [shops.length])

  const searchHandler = () => {
    console.log("pressed handler")
    filterShop()
  }

  const dummyShopCover =
    "https://media.gettyimages.com/id/1428594094/photo/empty-coffee-shop-interior-with-wooden-tables-coffee-maker-pastries-and-pendant-lights.jpg?s=612x612&w=gi&k=20&c=Tu0dyFuw3p1UDS_I19ifEvqOxPqWzLKqIx0S-6uYCqA="
  return (
    <Screen style={styles.container}>
      <ScrollView>
        <View style={styles.screen}>
          <Logo />
          <AppText title="Find the best coffee for you" variant="bold" />

          <AppTextInput
            onChange={e =>
              setSearchText(val => {
                if (e.length === 0) {
                  setShopData(v => [])
                }
                return e
              })
            }
            value={searchText}
            onModal={setModalVisible}
            searchHandler={searchHandler}
            isSearching={searching}
          />

          <View style={styles.textInputContainer}>
            {/* <Filter /> */}
            {searchText.length > 0 && shopData.length > 0 && (
              <View
                style={{
                  height: 350,
                  flex: 1,
                  width: "100%",
                }}
              >
                <GradientWrapper
                  modalVisible={searchText.length > 0 && shopData.length > 0}
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
