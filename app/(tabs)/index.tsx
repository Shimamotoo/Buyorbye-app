import { Image, StyleSheet, TextInput, View } from "react-native";

const avatar = require("../../assets/images/Avatar_Guaxinim.png");

export default function Index() {
  return (
    <View style={style.container}>
      <View style={style.section}>
        <View style={style.avatarSection}>
          <Image style={style.avatarImage} source={avatar} />
        </View>
        <View>
          <TextInput
            style={style.input}
            placeholder="Quem quer gastar dinerus?..."
          />
        </View>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#232329",
  },
  text: {
    color: "white",
  },
  section: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarImage: {
    width: 150,
    height: 150,
    borderRadius: 25,
    borderWidth: 3,
    backgroundColor: "#7d7d7c",
    borderColor: "#2e2e2d",
  },
  avatarSection: {
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderColor: "gray",
    backgroundColor: "#8a8a8a",
    color: "black",
    height: 40,
    width: 300,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 10,
  },
});
