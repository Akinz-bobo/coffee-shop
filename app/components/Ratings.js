import { View } from "react-native"
import { Entypo } from "@expo/vector-icons"

const Ratings = ({ stars }) => {
  let starArray = []
  let redStars = Math.floor(Number(stars))
  if (redStars > 5) {
    redStars = 5
  }
  for (let i = 0; i < redStars; i++) {
    starArray.push({
      name: "star",
      color: "#D17842",
    })
  }

  let whiteStar = 5 - starArray.length
  if (starArray.length < 5) {
    for (let i = 0; i < whiteStar; i++) {
      starArray.push({
        name: "star",
        color: "white",
      })
    }
  }

  return (
    <View
      style={{
        flexDirection: "row",
        gap: 2,
        alignItems: "center",
        marginTop: 5,
      }}
    >
      {starArray.map((star, ind) => (
        <Entypo name={star.name} color={star.color} size={16} key={ind} />
      ))}
    </View>
  )
}

export default Ratings
