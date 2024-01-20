import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native"
import React, { useState } from "react"
import Screen from "../components/Screen"
import IconsGroup from "../components/IconsGroup"
import colors from "../utils/colors"
import AppText from "../components/AppText"
import TextButton from "../components/TextButton"
import Glass from "../components/Glass"

export default function OriginDetailScreen({ route }) {
  const item = route.params

  /* 
  DATA: {

    image:url,
    sizes:[],
    description:"",
    stars: 3.4,
    ratings: 234,
  }
  
  */
  console.log("OriginDetailScreen:", item)
  const image = require("../assets/img2.png")
  const sizes = ["250gm", "500gm", "1000gm"]
  const [active, setActive] = useState(null)
  const onPress = index => {
    setActive(index)
  }
  return (
    <Screen>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <ImageBackground
            esizeMode="cover"
            style={styles.image}
            source={image}
          >
            <IconsGroup />
            <Glass />
          </ImageBackground>
          <View style={styles.footer}>
            <View style={styles.description}>
              <AppText title="Description" style={{ fontSize: 20 }} />
              <AppText
                title="Rwanda has a horrific history and coffee has been a part of that history since 1930’s during that time, coffee was a main source of the country’s economy. Back in the days Belgium colonial government would horribly farmers to grow coffee for them to controlling prices
               
                
                "
                style={{ fontSize: 14, fontWeight: 400 }}
              />
            </View>
            <View style={{ marginTop: 20 }}>
              <AppText title="Size" style={{ fontSize: 20 }} />
              <View style={styles.buttons}>
                {sizes.map((item, index) => (
                  <TextButton
                    key={index}
                    title={item}
                    size="sm"
                    style={styles.size}
                    // background="light"
                    onPress={() => onPress(index)}
                    active={index === active ? true : false}
                  />
                ))}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  image: {
    alignItems: "center",
    height: 500,
    paddingTop: 20,
  },
  description: {
    gap: 10,
  },

  size: {
    color: colors.white,
    fontSize: 16,
  },
  buttons: {
    flexDirection: "row",
    marginTop: 20,
    flexWrap: "wrap",
    gap: 10,
  },
  footer: {
    backgroundColor: colors.dark,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    height: "100%",
    marginBottom: 50,
  },
})
