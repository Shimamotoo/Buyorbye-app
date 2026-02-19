import type { contasInfo } from "@/types/contaType";
import {
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { useFonts } from "@expo-google-fonts/montserrat/useFonts";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

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
        <View style={style.mainTitle}>
          {perfil?.nome === "Inhas" ? (
            <>
              <Text style={style.text}>{perfil?.nome} pequinhas</Text>
              <Ionicons name="sparkles-outline" size={20} color={"#6619ff"} />
            </>
          ) : (
            <>
              <Text style={style.text}>{perfil?.nome}</Text>
              <Ionicons name="paw-outline" size={20} color={"#6619ff"} />
            </>
          )}
        </View>
        <View style={style.cardsContainer}>
          <Pressable style={style.cards}>
            <Text style={style.cardText}>1</Text>
          </Pressable>
          <Pressable style={style.cards}>
            <Text style={style.cardText}>2</Text>
          </Pressable>
          <Pressable style={style.cards}>
            <Text style={style.cardText}>3</Text>
          </Pressable>
          <Pressable style={style.cards}>
            <Text style={style.cardText}>4</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#7d57c9",
    display: "flex",
  },
  headerSection: {
    backgroundColor: "#7d57c9",
    position: "relative",
    height: 60,
  },
  avatarContainer: {
    position: "absolute",
    backgroundColor: "#e0dde6",
    padding: 6,
    borderRadius: 60,
    left: 130,
    top: 5,
    zIndex: 1000,
  },
  avatar: {
    backgroundColor: "#28174b",
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  mainSection: {
    backgroundColor: "#e0dde6",
    flexGrow: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  mainTitle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#6619ff18",
    borderColor: "#6619ff",
    width: "85%",
    borderWidth: 0.5,
    borderRadius: 7,
    gap: 5,
    padding: 7,
    marginTop: 50,
  },
  text: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 20,
    textAlign: "center",
    color: "#6619ff",
  },
  cardsContainer: {
    marginTop: 120,
    height: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    columnGap: 15,
  },
  cards: {
    backgroundColor: "#7d57c9",
    width: "45%",
    height: 120,
    marginBottom: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    color: "white",
  },
});
