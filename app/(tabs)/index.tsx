import type { contasInfo } from "@/types/contaType";
import {
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { useFonts } from "@expo-google-fonts/montserrat/useFonts";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const avatar = require("../../assets/images/bizibizi-cat.gif");

export default function Index() {
  const router = useRouter();
  const [user, setUser] = useState<string>("inhas");

  async function handleSubmit() {
    const contas: Record<string, contasInfo> = {
      inhas: {
        nome: "Inhas",
        salario: 5000,
        avatar: "Avatar_Guaxinim.png",
      },
      inhus: {
        nome: "Inhus",
        salario: 3500,
        avatar: "Avatar_Gato.png",
      },
    };

    const dadosParaSalvar = contas[user];
    if (dadosParaSalvar) {
      await AsyncStorage.setItem(
        "@usuario_logado",
        JSON.stringify(dadosParaSalvar),
      );
      router.push("/main");
    }
  }

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) return null;

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
    fontFamily: "Montserrat_400Regular",
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
    fontFamily: "Montserrat_400Regular",
    fontSize: 18,
  },
});
