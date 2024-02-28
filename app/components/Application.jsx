import { NavigationContainer } from "@react-navigation/native"
import navigationTheme from "../navigations/navigationTheme"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import AppTabs from "../navigations/AppTabs"
import { FavCtxWrapper } from "../contexts/FavouritesCtx"
import MapCtxProvider from "../contexts/MapCtx"
import SpecialMapCtxProvider from "../contexts/SpecialMapCtx"
export default function Application({ onReady, shops, origins }) {
  // console.log(shops)
  const onNavigationReady = () => {
    onReady()
  }
  return (
    <NavigationContainer onReady={onNavigationReady} theme={navigationTheme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <MapCtxProvider>
          <FavCtxWrapper>
            <SpecialMapCtxProvider>
              <AppTabs shops={shops} origins={origins} />
            </SpecialMapCtxProvider>
          </FavCtxWrapper>
        </MapCtxProvider>
      </GestureHandlerRootView>
    </NavigationContainer>
  )
}
