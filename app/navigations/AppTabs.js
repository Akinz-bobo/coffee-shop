import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import FavoritesScreen from "../screens/FavoritesScreen"
import AppNavigator from "./AppNavigator"
import { FontAwesome } from "@expo/vector-icons"
import colors from "../utils/colors"
import ShopNavigator from "./ShopNavation"
import { useFavouritesStore } from "../hooks/localStorage"
const Tab = createBottomTabNavigator()

export default AppTabs = ({ shops, origins }) => {
  const { allFavoriteShops } = useFavouritesStore()

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

          if (route.name === "Home") {
            iconName = focused ? "home" : "home"
          } else if (route.name === "Map") {
            iconName = focused ? "map-marker" : "map-marker"
          } else if (route.name === "Favorites") {
            iconName = focused ? "heart" : "heart"
          }
          return <FontAwesome name={iconName} size={size} color={color} />
        },
      })}
    >
      <Tab.Screen
        options={{ tabBarShowLabel: false }}
        name="Home"
        initialParams={{ shops, origins }}
        component={AppNavigator}
      />
      <Tab.Screen
        options={{ tabBarShowLabel: false }}
        name="Map"
        component={ShopNavigator}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarBadge: allFavoriteShops.length,
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  )
}
