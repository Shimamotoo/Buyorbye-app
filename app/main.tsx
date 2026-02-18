import type { contasInfo } from "@/types/contaType";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

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

  return (
    <View style={style.container}>
      <View style={style.headerSection}>
        <View style={style.avatarContainer}>
          <Image style={style.avatar} source={avatar} />
        </View>
      </View>
      <View style={style.mainSection}>
        <Text>{perfil?.nome}</Text>
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
    height: 75,
    position: "relative",
  },
  mainSection: {
    flexGrow: 1,
    backgroundColor: "#656574",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  avatarContainer: {
    position: "absolute",
    backgroundColor: "#656574",
    padding: 6,
    borderRadius: 60,
    left: 130,
    top: 25,
    zIndex: 1000,
  },
  avatar: {
    width: 90,
    height: 90,
    backgroundColor: "#232329",
    borderRadius: 50,
  },
});
