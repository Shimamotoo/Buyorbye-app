import { StyleSheet, View } from "react-native";

export default function MainScreen() {
  return (
    <View style={style.container}>
      <View style={style.headerSection}></View>
      <View style={style.mainSection}></View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#232329",
    display: "flex",
  },
  headerSection: {
    backgroundColor: "red",
    height: 60,
  },
  mainSection: {
    flexGrow: 1,
    backgroundColor: "blue",
  },
});
