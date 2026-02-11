import { StyleSheet, Text, View } from "react-native";

function AboutScreen() {
  return (
    <View style={style.container}>
      <Text style={style.text}>Essa é a tela de sobre do projeto</Text>
      <Text style={style.text2}>Projeto BuyourBye</Text>
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
    fontSize: 20,
    fontWeight: "bold",
  },
  text2: {
    color: "white",
    fontSize: 12,
  },
});

export default AboutScreen;
