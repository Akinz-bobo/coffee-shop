import { NavigationContainer } from "@react-navigation/native"
import navigationTheme from "./app/navigations/navigationTheme"
import AppTabs from "./app/navigations/AppTabs"

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppTabs />
    </NavigationContainer>
  )
}
