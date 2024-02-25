import { StyleSheet, Text, View } from "react-native"
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetFlatList,
  BottomSheetTextInput,
} from "@gorhom/bottom-sheet"
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import colors from "../utils/colors"
import axios from "axios"
import { KEY } from "../../environment"
import ShopItem from "./ShopItem"
import { Fontisto } from "@expo/vector-icons"
import Loading from "../assets/lottie/Loading"
import { useMapContext } from "../contexts/MapCtx"

export default function AppBottomSheet({ moveTo, navitation }) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [offset, setOffset] = useState(0)
  const [selectedId, setSelectedId] = useState(null)
  const { bottomSheetRef } = useMapContext()
  // fetch yelp data
  async function searchBusiness(term, location) {
    console.log("called")
    if (loading) {
      return
    }
    setLoading(true)

    try {
      const response = await axios.get(
        ` https://api.yelp.com/v3/businesses/search?sort_by=best_match&limit=50&offset=${offset}`,
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
      // console.log(response.data.businesses[0])
      setData(previous => [...previous, ...response.data.businesses])
      return
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  // console.log(data[0])
  function loadMoreShops() {
    searchBusiness("Cafés & Coffee Shops", "San Francisco, CA")
    setOffset(prev => prev + 50)
  }

  // ref

  // variables
  const snapPoints = useMemo(() => ["25%", "90%"])

  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        appearsOnIndex={1}
        disappearsOnIndex={0}
        {...props}
      />
    ),
    []
  )
  return (
    <BottomSheet
      backdropComponent={renderBackdrop}
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      enablePanDownToClose={false}
      backgroundStyle={{ backgroundColor: colors.medium }}
      handleIndicatorStyle={{ display: "none" }}
    >
      <View style={styles.contentContainer}>
        <View style={styles.container}>
          <Text style={styles.text}>Coffee Shops</Text>
          <Fontisto name="coffeescript" size={24} color={colors.primary} />
        </View>

        <BottomSheetFlatList
          ListEmptyComponent={<Loading />}
          ListFooterComponent={data.length > 0 ? <Loading /> : null}
          extraData={selectedId}
          contentContainerStyle={styles.list}
          data={data}
          onEndReached={loadMoreShops}
          keyExtractor={(data, index) => {
            return data.id + index.toString()
          }}
          renderItem={({ item }) => (
            <ShopItem
              item={item}
              setSelectedId={setSelectedId}
              onPress={() => navitation.navigate("ShopDetail", item)}
            />
          )}
        />
      </View>
    </BottomSheet>
  )
}
const styles = StyleSheet.create({
  loading: {
    marginTop: 15,
  },
  list: {
    gap: 10,
  },

  contentContainer: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    // paddingTop:20,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "800",
  },
  container: {
    width: "60%",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    flexDirection: "row",
    gap: 10,
    borderBottomColor: colors.primary,
    borderBottomWidth: 4,
    paddingRight: 15,
    paddingLeft: 15,
    paddingBottom: 5,
    borderRadius: 2,
    marginBottom: 20,
  },
})
