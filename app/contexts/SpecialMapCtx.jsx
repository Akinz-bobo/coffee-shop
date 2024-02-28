import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react"
import * as Location from "expo-location"

export const MapCtx = createContext()

const SpecialMapCtxProvider = ({ children }) => {
  const [origin, setOrigin] = useState({ latitude: 0, longitude: 0 })
  const [destination, setDestination] = useState(null)
  const [showDirections, setShowDirections] = useState(false)
  const [distance, setDistance] = useState(0)
  const [duration, setDuration] = useState(0)
  const [markers, setMarkers] = useState([])
  const SpecialMapRef = useRef(null)

  const getOrigin = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== "granted") {
      alert("Permission to access location was denied")
      return
    }
    let location = await Location.getCurrentPositionAsync({})
    const address = await Location.reverseGeocodeAsync(location.coords)
    setOrigin({
      longitude: location.coords.longitude,
      latitude: location.coords.latitude,
    })
  }
  useEffect(() => {
    getOrigin()
  }, [])

  const moveTo = async position => {
    const camera = await SpecialMapRef.current?.getCamera()
    if (camera) {
      camera.center = position
      SpecialMapRef.current?.animateCamera(camera, { duration: 1000 })
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
      SpecialMapRef.current?.fitToCoordinates([origin, destination], {
        edgePadding,
      })
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
    console.log(location)
    setDestination(location)
    moveTo(location)
    traceRoute()
  }
  const valueProps = {
    onPlaceSelected,
    SpecialMapRef,
    traceRouteOnReady,
    showDirections,
    duration,
    distance,
    markers,
    origin,
    setMarkers,
  }

  return <MapCtx.Provider value={valueProps}>{children}</MapCtx.Provider>
}
export default SpecialMapCtxProvider

export function useSpecialMapContext() {
  const {
    onPlaceSelected,
    SpecialMapRef,
    traceRouteOnReady,
    showDirections,
    duration,
    distance,
    markers,
    setMarkers,
    origin,
  } = useContext(MapCtx)
  return {
    onPlaceSelected,
    SpecialMapRef,
    traceRouteOnReady,
    showDirections,
    duration,
    distance,
    markers,
    setMarkers,
    origin,
  }
}
