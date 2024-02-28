import React, { useCallback, useEffect, useRef, useState } from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { View, Animated, Easing, StyleSheet } from "react-native"
import LottieView from "lottie-react-native"
import * as SplashScreen from "expo-splash-screen"

const LOTTI_JSON = require("./assets/splash.json")

SplashScreen.preventAutoHideAsync()
export default function SplashScreen() {
  const animationProgress = useRef(new Animated.Value(0))
  const [isLayoutReady, setLayoutReady] = useState(false)
  const [isAppReady, setAppReady] = useState(false)

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
  const onApplicationReady = useCallback(() => {
    setAppReady(true)
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
      {isReady && <Application onReady={onApplicationReady} />}
      {showAnimation && (
        <View
          pointerEvents="none"
          style={[StyleSheet.absoluteFill, styles.splashContainer]}
          onLayout={onLayout}
        >
          <LottieView
            style={{
              width: 200,
              height: 200,
              backgroundColor: "green",
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
