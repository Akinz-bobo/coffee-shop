import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ShopDetailScreen from "../screens/ShopDetailScreen"
import HomeScreen from "../screens/HomeScreen"
import OriginDetailScreen from "../screens/OriginDetailScreen"
import BackButton from "../components/BackButton"
import MapScreen from "../screens/MapScreen"
import ShopDetail from "../components/ShopDetail"

const Stack = createNativeStackNavigator()

const ShopNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      headerRight: ({}) => <BackButton />,
    }}
  >
    <Stack.Screen name="MapScreen" component={MapScreen} />
    <Stack.Screen name="ShopDetail" component={ShopDetail} />
  </Stack.Navigator>
)

export default ShopNavigator
