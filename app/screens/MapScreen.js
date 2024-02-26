import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps"
import { StyleSheet, View, Dimensions, Text } from "react-native"
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"
import { KEY } from "..//../environment"
import Constants from "expo-constants"
import MapViewDirections from "react-native-maps-directions"
import AppBottomSheet from "../components/AppBottomSheet"
import { useMapContext } from "../contexts/MapCtx"
import AppMarker from "../components/AppMarker"
import AppCallout from "../components/AppCallout"
// import BottomSheet from "@gorhom/bottom-sheet"

// https://docs.expo.dev/versions/latest/sdk/map-view/
// https://www.npmjs.com/package/react-native-google-places-autocomplete
// https://www.npmjs.com/package/react-native-maps-directions

const { width, height } = Dimensions.get("window")

const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0087
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
const INITIAL_POSITION = {
  latitude: 40.76711,
  longitude: -73.979704,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
}

function InputAutocomplete({ label, placeholder, onPlaceSelected }) {
  return (
    <>
      <Text>{label}</Text>
      <GooglePlacesAutocomplete
        styles={{ textInput: styles.input }}
        placeholder={placeholder || ""}
        fetchDetails
        onPress={(data, details = null) => {
          onPlaceSelected(details)
        }}
        query={{
          key: KEY.GOOGLE_API_KEY,
          language: "pt-BR",
        }}
      />
    </>
  )
}

export default function MapScreen({ navigation }) {
  const {
    origin,
    destination,
    showDirections,
    traceRouteOnReady,
    mapRef,
    markers,
  } = useMapContext()

  const locationsOfInterest = []
  // const showLocationsOfInterest = () => {
  //   return markers.map((item, index) => (
  //     <AppMarker key={index} coordinate={item.location} title={item.name} />
  //   ))
  // }
  return (
    <View style={styles.container}>
      <MapView
        // showsUserLocation
        // mapType="hybrid"
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={INITIAL_POSITION}
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
        {markers.map((marker, ind) => (
          <Marker
            key={ind}
            coordinate={{
              longitude: marker.longitude,
              latitude: marker.latitude,
            }}
          >
            <AppMarker />
            <AppCallout item={marker} />
          </Marker>
        ))}
      </MapView>
      <AppBottomSheet navitation={navigation} />
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
