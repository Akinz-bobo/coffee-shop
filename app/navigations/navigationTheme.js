import { DefaultTheme } from "@react-navigation/native"
import colors from "../utils/colors"

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.dark,
  },
}
