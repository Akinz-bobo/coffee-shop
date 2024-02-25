import { NavigationContainer } from "@react-navigation/native"
import navigationTheme from "./app/navigations/navigationTheme"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import AppTabs from "./app/navigations/AppTabs"
import { FavCtxWrapper } from "./app/contexts/FavouritesCtx"
export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer theme={navigationTheme}>
        <FavCtxWrapper>
          <AppTabs />
        </FavCtxWrapper>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}
