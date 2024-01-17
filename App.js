import HomeScreen from "./app/screens/HomeScreen"
import GradientWrapper from "./app/components/GradientWrapper"
import Screen from "./app/components/Screen"
import React, { useState } from "react"
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native"
import colors from "./app/utils/colors"
import ListRenderer from "./app/components/ListRenderer"

export default function App() {
  const suggestion = [
    { title: "Rwanda", id: 1 },
    { title: "Burundi", id: 2 },
    { title: "Rwanda", id: 3 },
    { title: "Ethiopia", id: 4 },
    { title: "Congo", id: 5 },
    { title: "Tanzania", id: 6 },
    { title: "Uganda", id: 7 },
    { title: "Kenya", id: 8 },
  ]
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <Screen>
      <View style={styles.centeredView}>
        <GradientWrapper>
          <ListRenderer data={suggestion} />
        </GradientWrapper>

        {/* <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.")
          setModalVisible(!modalVisible)
        }}
      >
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
})
