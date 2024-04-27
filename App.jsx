import React from "react"
import { StyleSheet, SafeAreaView } from "react-native"
import LottieView from "lottie-react-native"
import { useGetData } from "./app/hooks/fetch"

import { NavigationContainer } from "@react-navigation/native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import SpecialMapCtxProvider from "./app/contexts/SpecialMapCtx"
import navigationTheme from "./app/navigations/navigationTheme"
import MapCtxProvider from "./app/contexts/MapCtx"
import FavoriteContextProvider from "./app/hooks/localStorage"
import AppTabs from "./app/navigations/AppTabs"
import LOTTIE_JSON from "./app/assets/lottie/splash.json"
import LOTTIE_JSON2 from "./app/assets/lottie/splashscreen.json"
import LOTTIE_JSON3 from "./app/assets/lottie/b6jJYLrzBW.json"
import colors from "./app/utils/colors"

export default function App() {
  const { isReady, shops, origins } = useGetData()
  return (
    <>
      {isReady ? (
        <NavigationContainer theme={navigationTheme}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <MapCtxProvider>
              <FavoriteContextProvider>
                <SpecialMapCtxProvider>
                  <AppTabs shops={shops} origins={origins} />
                </SpecialMapCtxProvider>
              </FavoriteContextProvider>
            </MapCtxProvider>
          </GestureHandlerRootView>
        </NavigationContainer>
      ) : (
        <SafeAreaView pointerEvents="none" style={[StyleSheet.absoluteFill]}>
          <LottieView
            style={{
              flex: 1,
              backgroundColor: colors.primary,
            }}
            source={LOTTIE_JSON3}
            autoPlay
          />
        </SafeAreaView>
      )}
    </>
  )
}
