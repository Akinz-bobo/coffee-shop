import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react"
import * as Location from "expo-location"

export const MapCtx = createContext()

const MapCtxProvider = ({ children }) => {
  const [origin, setOrigin] = useState({ latitude: 0, longitude: 0 })
  const [destination, setDestination] = useState(null)
  const [showDirections, setShowDirections] = useState(false)
  const [distance, setDistance] = useState(0)
  const [duration, setDuration] = useState(0)
  const [markers, setMarkers] = useState([])
  const mapRef = useRef(null)
  const bottomSheetRef = useRef(null)

  const getOrigin = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== "granted") {
      alert("Permission to access location was denied")
      return
    }
    let location = await Location.getCurrentPositionAsync({})
    setOrigin({
      latitude: location.coords.longitude,
      longitude: location.coords.latitude,
    })
  }

  useEffect(() => {
    getOrigin()
  }, [])

  const moveTo = async position => {
    const camera = await mapRef.current?.getCamera()
    if (camera) {
      camera.center = position
      mapRef.current?.animateCamera(camera, { duration: 1000 })
    }
  }

  const edgePaddingValue = 70

  const edgePadding = {
    top: edgePaddingValue,
    right: edgePaddingValue,
    bottom: edgePaddingValue,
    left: edgePaddingValue,
  }

  const traceRoute = () => {
    if (origin && destination) {
      setShowDirections(true)
      mapRef.current?.fitToCoordinates([origin, destination], { edgePadding })
    }
  }

  const traceRouteOnReady = args => {
    console.log(args)
    if (args) {
      setDistance(args.distance)
      setDuration(args.duration)
    }
  }

  const onPlaceSelected = location => {
    setDestination(location)
    moveTo(location)
    traceRoute()
  }

  const closeBottomSheet = () => {
    bottomSheetRef.current.snapToIndex(0)
  }
  const valueProps = {
    onPlaceSelected,
    mapRef,
    bottomSheetRef,
    traceRouteOnReady,
    showDirections,
    duration,
    distance,
    closeBottomSheet,
    markers,
    setMarkers,
  }

  return <MapCtx.Provider value={valueProps}>{children}</MapCtx.Provider>
}
export default MapCtxProvider

export function useMapContext() {
  const {
    onPlaceSelected,
    mapRef,
    traceRouteOnReady,
    showDirections,
    duration,
    distance,
    bottomSheetRef,
    closeBottomSheet,
    markers,
    setMarkers,
  } = useContext(MapCtx)
  return {
    onPlaceSelected,
    mapRef,
    traceRouteOnReady,
    showDirections,
    duration,
    distance,
    bottomSheetRef,
    closeBottomSheet,
    markers,
    setMarkers,
  }
}
