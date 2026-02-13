import { Delius_400Regular, useFonts } from "@expo-google-fonts/delius";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const avatar = require("../../assets/images/bizibizi-cat.gif");

export default function Index() {
  const router = useRouter();
  const [user, setUser] = useState<string>("Inhas");
  const [fontsLoaded, error] = useFonts({
    Delius_400Regular,
  });

  function handleSubmit() {
    router.push("/main");
    console.log(user);
  }

  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <View style={style.container}>
      <View style={style.sectionMain}>
        <View style={style.logoSection}>
          <Image style={style.catLogo} source={avatar} />
        </View>
        <View>
          <View style={style.textContainer}>
            <Text style={style.text}>Quem quer gastar dinerus?</Text>
          </View>
          <View style={style.pickerContainer}>
            <Picker
              style={style.picker}
              selectedValue={user}
              onValueChange={(itemValue) => setUser(itemValue)}
              dropdownIconColor="white"
              dropdownIconRippleColor="#808080"
            >
              <Picker.Item label="Inhas" value="inhas" />
              <Picker.Item label="Inhus" value="inhus" />
            </Picker>
          </View>
        </View>
      </View>
      <View style={style.buttonSection}>
        <Pressable style={style.button} onPress={handleSubmit}>
          <Ionicons name="send" size={15} color={"white"} />
          <Text style={style.textButton}>Entrar</Text>
        </Pressable>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#232329",
    height: "100%",
  },
  sectionMain: {
    marginTop: 70,
    justifyContent: "center",
    alignItems: "center",
    height: "60%",
  },
  logoSection: {
    justifyContent: "center",
    alignItems: "center",
  },
  catLogo: {
    width: 150,
    height: 150,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontFamily: "Delius_400Regular",
    fontSize: 18,
  },
  pickerContainer: {
    color: "white",
    borderColor: "#868686",
    backgroundColor: "#535353",
    overflow: "hidden",
    width: 300,
    marginTop: 25,
    borderWidth: 3,
    borderRadius: 10,
  },
  picker: {
    color: "white",
    width: "100%",
    height: 50,
  },
  buttonSection: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    display: "flex",
    backgroundColor: "#6619ff",
    alignItems: "center",
    gap: 10,
    padding: 10,
    borderRadius: 8,
    width: 200,
  },
  textButton: {
    color: "white",
    fontFamily: "Delius_400Regular",
    fontSize: 18,
  },
});
