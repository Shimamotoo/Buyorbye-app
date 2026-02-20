import type { contasInfo } from "@/types/contaType";
import {
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { useFonts } from "@expo-google-fonts/montserrat/useFonts";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const avatar = require("../../assets/images/bizibizi-cat.gif");

export default function Index() {
  const router = useRouter();
  const [user, setUser] = useState<string>("Inhas");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  async function handleSubmit() {
    const contas: Record<string, contasInfo> = {
      Inhas: {
        nome: "Inhas",
        salario: 5000,
        avatar: "Avatar_Guaxinim.png",
      },
      Inhus: {
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

  function handleDropDown() {
    setIsOpen((prev) => !prev);
  }

  function selectPerfil(nome: string) {
    setUser(nome);
    setIsOpen(false);
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
            <Text style={style.label}>Nome do pequinhas</Text>
            <Pressable onPress={handleDropDown}>
              <Text style={style.textButton}> {user} </Text>
            </Pressable>
            {isOpen && (
              <View style={style.dropdown}>
                <Pressable
                  style={style.dropItens}
                  onPress={() => selectPerfil("Inhas")}
                >
                  <Text style={style.textButton}>Inhas</Text>
                </Pressable>
                <Pressable
                  style={style.dropItens}
                  onPress={() => selectPerfil("Inhus")}
                >
                  <Text style={style.textButton}>Inhus</Text>
                </Pressable>
              </View>
            )}
            <Ionicons
              style={style.seta}
              name="caret-down"
              size={15}
              color={"white"}
            />
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
    backgroundColor: "#7d57c9",
    height: "100%",
  },
  sectionMain: {
    marginTop: 135,
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
    position: "relative",
  },
  seta: {
    position: "absolute",
    top: 12,
    right: 13,
  },
  text: {
    color: "white",
    fontFamily: "Montserrat_400Regular",
    fontSize: 18,
  },
  pickerContainer: {
    marginTop: 12,
    position: "relative",
    backgroundColor: "#7d57c9",
    borderColor: "white",
    borderWidth: 1.5,
    width: 300,
    borderRadius: 50,
    padding: 7,
  },
  label: {
    fontFamily: "Montserrat_400Regular",
    position: "absolute",
    top: -14,
    left: 73,
    backgroundColor: "#7d57c9",
    paddingVertical: 3,
    paddingHorizontal: 5,
    color: "white",
  },
  dropdown: {
    position: "absolute",
    top: 50,
    left: 11,
    backgroundColor: "#4b3477d7",
    color: "white",
    width: 280,
    padding: 7,
    display: "flex",
    gap: 7,
    borderRadius: 12,
  },
  dropItens: {
    backgroundColor: "#7a61a7d7",
    padding: 5,
    borderRadius: 10,
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
    backgroundColor: "#3b226b",
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
