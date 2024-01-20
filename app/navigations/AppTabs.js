import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import FavoritesScreen from "../screens/FavoritesScreen"
import AppNavigator from "./AppNavigator"

const Tab = createBottomTabNavigator()

export default AppTabs = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Root" component={AppNavigator} />
    <Tab.Screen name="Favorites" component={FavoritesScreen} />
  </Tab.Navigator>
)
