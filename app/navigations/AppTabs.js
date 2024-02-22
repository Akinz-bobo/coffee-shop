import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import FavoritesScreen from "../screens/FavoritesScreen"
import AppNavigator from "./AppNavigator"
import { FontAwesome } from "@expo/vector-icons"
import colors from "../utils/colors"
const Tab = createBottomTabNavigator()

export default AppTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      shifting={true}
      labeled={false}
      sceneAnimationEnabled={false}
      activeColor={colors.primary}
      inactiveColor="gray"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: colors.medium,
          paddingTop: 0,
          marginTop: 0,
          borderTopWidth: 0,
        },
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === "Root") {
            iconName = focused ? "home" : "home"
          } else if (route.name === "Favorites") {
            iconName = focused ? "heart" : "heart-o"
          }
          return <FontAwesome name={iconName} size={size} color={color} />
        },
      })}
    >
      <Tab.Screen name="Root" component={AppNavigator} />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{ tabBarBadge: 3 }}
      />
    </Tab.Navigator>
  )
}
