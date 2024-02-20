import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import FavoritesScreen from "../screens/FavoritesScreen"
import AppNavigator from "./AppNavigator"
import { MaterialCommunityIcons } from "@expo/vector-icons"
const Tab = createBottomTabNavigator()

export default AppTabs = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen
      name="Home"
      component={AppNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Favorites"
      component={FavoritesScreen}
      options={({ navigation, route }) => ({
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="cards-heart"
            size={size}
            color={color}
          />
        ),
      })}
    />
  </Tab.Navigator>
)
