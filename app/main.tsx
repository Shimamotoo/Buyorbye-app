import type { contasInfo } from "@/types/contaType";
import {
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { useFonts } from "@expo-google-fonts/montserrat/useFonts";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

const avatar = require("../assets/images/Avatar_Gato.png");

export default function MainScreen() {
  const [perfil, setPerfil] = useState<contasInfo | null>(null);

  async function carrgarPerfil() {
    const response = await AsyncStorage.getItem("@usuario_logado");

    if (response) {
      setPerfil(JSON.parse(response));
    }
  }

  useEffect(() => {
    carrgarPerfil();
  }, []);

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <View style={style.container}>
      <View style={style.headerSection}>
        <View style={style.avatarContainer}>
          <Image style={style.avatar} source={avatar} />
        </View>
      </View>
      <View style={style.mainSection}>
        <View style={style.main}>
          <Text style={style.text}>{perfil?.nome} pequinhas então?</Text>
          <TextInput style={style.input} />
        </View>
      </View>
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
    backgroundColor: "#232329",
    position: "relative",
    height: 60,
  },
  avatarContainer: {
    position: "absolute",
    backgroundColor: "#9c9c9c",
    padding: 6,
    borderRadius: 60,
    left: 130,
    top: 5,
    zIndex: 1000,
  },
  avatar: {
    backgroundColor: "#232329",
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  mainSection: {
    backgroundColor: "#9c9c9c",
    flexGrow: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  main: {
    display: "flex",
    alignSelf: "center",
    backgroundColor: "#dfdfdf",
    width: "85%",
    borderRadius: 7,
    padding: 7,
    marginTop: 50,
  },
  text: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 6,
    fontSize: 16,
    width: "100%",
    alignSelf: "center",
  },
});
