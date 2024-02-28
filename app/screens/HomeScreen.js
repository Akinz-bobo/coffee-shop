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

export default function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState()
  const { getShops, shops } = useGetShops()
  const { getorigin, origin } = useGetOrigin()
  const [searchText, setSearchText] = useState("")

  const [shopData, setShopData] = useState([])
  const filterShop = useCallback(() => {
    if (searchText.length > 0) {
      setShopData(al =>
        shops.filter(v =>
          v.shop_name.toLowerCase().includes(searchText.toLowerCase())
        )
      )
      return
    }
    setShopData(shops)
  }, [searchText, shops.length])
  useEffect(() => {
    filterShop()
  }, [shops.length])

  const searchHandler = () => {
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
            onChange={setSearchText}
            value={searchText}
            onModal={setModalVisible}
            searchHandler={searchHandler}
          />

          <View style={styles.textInputContainer}>
            {/* <Filter /> */}
            {modalVisible && (
              <GradientWrapper
                modalVisible={modalVisible}
                style={{
                  paddingLeft: 10,
                  width: "95%",
                  position: "absolute",
                  zIndex: 10,
                  backgroundColor: colors.dark,
                }}
              >
                <Suggestions shops={shopData} />
              </GradientWrapper>
            )}
            {!modalVisible && (
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
                  <Loading />
                )}
              </View>
            )}

            <View>
              <AppText
                title={"Speciality Coffee"}
                style={{ marginBottom: 16 }}
              />

              {shopData.length > 0 ? (
                <FlatList
                  horizontal
                  data={shopData}
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
                <Loading />
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
  },
})
