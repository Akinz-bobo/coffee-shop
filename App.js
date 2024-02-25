import { NavigationContainer } from "@react-navigation/native"
import AppNavigator from "./app/navigations/AppNavigator"
import navigationTheme from "./app/navigations/navigationTheme"
import AppTabs from "./app/navigations/AppTabs"
import { FavCtxWrapper } from "./app/contexts/FavouritesCtx"

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <FavCtxWrapper>
        <AppTabs />
      </FavCtxWrapper>
    </NavigationContainer>
  )
}
