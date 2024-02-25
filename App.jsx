import { NavigationContainer } from "@react-navigation/native"
import navigationTheme from "./app/navigations/navigationTheme"
import { GestureHandlerRootView } from "react-native-gesture-handler"

import AppTabs from "./app/navigations/AppTabs"
export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer theme={navigationTheme}>
        <AppTabs />
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}
