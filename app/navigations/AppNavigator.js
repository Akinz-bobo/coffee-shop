import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ShopDetailScreen from "../screens/ShopDetailScreen"
import HomeScreen from "../screens/HomeScreen"
import OriginDetailScreen from "../screens/OriginDetailScreen"
import BackButton from "../components/BackButton"
import MapScreen from "../screens/MapScreen"
import ShopNavigator from "./ShopNavation"
import FavoritesScreen from "../screens/FavoritesScreen"
import SpecialMap from "../components/SpecialMap"

const Stack = createNativeStackNavigator()

const AppNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      headerLeft: ({}) => <BackButton />,
    }}
  >
    <Stack.Screen name="Root" component={HomeScreen} />
    <Stack.Screen name="SpecialMap" component={SpecialMap} />
    <Stack.Screen name="Shop" component={ShopDetailScreen} />
    <Stack.Screen name="Origin" component={OriginDetailScreen} />
    <Stack.Screen name="Favorite" component={FavoritesScreen} />
  </Stack.Navigator>
)

export default AppNavigator
