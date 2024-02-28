import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps"
import { StyleSheet, View, Dimensions } from "react-native"
import { KEY } from "..//../environment"
import Constants from "expo-constants"
import MapViewDirections from "react-native-maps-directions"
import AppMarker from "../components/AppMarker"
import AppCallout from "../components/AppCallout"
import { useSpecialMapContext } from "../contexts/SpecialMapCtx"
import { useEffect, useState } from "react"

// https://docs.expo.dev/versions/latest/sdk/map-view/
// https://www.npmjs.com/package/react-native-google-places-autocomplete
// https://www.npmjs.com/package/react-native-maps-directions

const { width, height } = Dimensions.get("window")

const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.01
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
export default function SpecialMap({ navigation }) {
  const {
    origin,
    destination,
    showDirections,
    traceRouteOnReady,
    SpecialMapRef,
    markers,
  } = useSpecialMapContext()

  return (
    <View style={styles.container}>
      <MapView
        showsUserLocation
        // mapType="hybrid"/
        ref={SpecialMapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={{
          longitude: origin.longitude,
          latitude: origin.latitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        // initialRegion={INITIAL_POSITION}
        showsBuildings={true}
        showsIndoors={true}
      >
        {origin && <Marker coordinate={origin} />}
        {destination && <Marker coordinate={destination} />}
        {showDirections && origin && destination && (
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={KEY.GOOGLE_API_KEY}
            strokeColor="#6644ff"
            strokeWidth={4}
            onReady={traceRouteOnReady}
          />
        )}
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  searchContainer: {
    position: "absolute",
    width: "90%",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    padding: 8,
    borderRadius: 8,
    top: Constants.statusBarHeight,
  },
  input: {
    borderColor: "#888",
    borderWidth: 1,
  },
  button: {
    backgroundColor: "#bbb",
    paddingVertical: 12,
    marginTop: 16,
    borderRadius: 4,
  },
  buttonText: {
    textAlign: "center",
  },
})
