import React, { useCallback, useEffect, useRef, useState } from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { View, Animated, Easing, StyleSheet } from "react-native"
import LottieView from "lottie-react-native"
import * as SplashScreen from "expo-splash-screen"
import Application from "./app/components/Application"
import { useGetData, useGetOrigin, useGetShops } from "./app/hooks/fetch"
const LOTTI_JSON = require("./app/assets/lottie/splash.json")

SplashScreen.preventAutoHideAsync()
export default function App() {
  const animationProgress = useRef(new Animated.Value(0))
  const [isLayoutReady, setLayoutReady] = useState(false)
  const [isAppReady, setAppReady] = useState(false)
  const { isReady, shops, origins } = useGetData()
  // console.log(shops)
  useEffect(() => {
    Animated.loop(
      Animated.timing(animationProgress.current, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start()
  }, [])
  const onApplicationReady = useCallback(async () => {
    //make api request to
    try {
    } catch (error) {
      console.log(error)
    } finally {
      setAppReady(true)
    }
  }, [])
  const onLayout = useCallback(async () => {
    try {
      await SplashScreen.hideAsync()
    } catch (e) {
      // handle errors
    } finally {
      setLayoutReady(true)
    }
  }, [])
  const showAnimation = !(isAppReady && isLayoutReady && isReady)
  return (
    <SafeAreaProvider>
      {isReady && (
        <Application
          onReady={onApplicationReady}
          shops={shops}
          origins={origins}
        />
      )}
      {showAnimation && (
        <View
          pointerEvents="none"
          style={[StyleSheet.absoluteFill, styles.splashContainer]}
          onLayout={onLayout}
        >
          <LottieView
            style={{
              flex: 1,
              // backgroundColor: "green",
            }}
            source={LOTTI_JSON}
            progress={animationProgress.current}
          />
        </View>
      )}
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    flex: 1,
  },
})
