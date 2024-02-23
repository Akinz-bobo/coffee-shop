import React, { useEffect, useState } from "react"
import MapView, { PROVIDER_GOOGLE } from "react-native-maps"
import { Dimensions, StyleSheet, View } from "react-native"
import * as Location from "expo-location"
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"
export default function MapScreen() {
  const [location, setLocation] = useState({ latitude: null, longitude: null })

  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync()

        if (status === "granted") {
          const location = await Location.getCurrentPositionAsync({})
          const { latitude, longitude } = location.coords
          setLocation({ latitude, longitude })
        } else {
          console.log("Location permission denied")
        }
      } catch (err) {
        console.warn(err)
      }
    }

    const checkLocationPermission = async () => {
      try {
        const { status } = await Location.getForegroundPermissionsAsync()

        if (status === "granted") {
          const location = await Location.getCurrentPositionAsync({})
          const { latitude, longitude } = location.coords
          setLocation({ latitude, longitude })
        } else if (status === "undetermined") {
          requestLocationPermission()
        } else {
          console.log("Location permission denied")
        }
      } catch (err) {
        console.warn(err)
      }
    }

    checkLocationPermission()
  }, [])
  const { latitude, longitude } = location
  const { width, height } = Dimensions.get("window")
  const ASPECT_RATIO = width / height
  const LATITUDE_DELTA = 0.02
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
  const INITIAL_POSITION = {
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
    longitude: longitude ? longitude : 3.8975136,
    latitude: latitude ? latitude : 7.4509795,
  }
  console.log(location)
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_POSITION}
      />
      {/* <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'YOUR API KEY',
        language: 'en',
      }}
    /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
})
