import { themes } from "@/constants/colors";
import type { contasInfo } from "@/types/contaType";
import {
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { useFonts } from "@expo-google-fonts/montserrat/useFonts";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const avatar = require("../assets/images/Avatar_Gato.png");

export default function MainScreen() {
  const router = useRouter();
  const [isDark, setIsDark] = useState(false);
  const colors = isDark ? themes.dark : themes.light;
  const s = style(colors);
  const [activeTab, setActiveTab] = useState<"home" | "config">("home");
  const [perfil, setPerfil] = useState<contasInfo | null>(null);
  const toggleTheme = () => setIsDark(!isDark);

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
    <View style={s.container}>
      <View style={s.headerSection}>
        <View style={s.avatarContainer}>
          <Image style={s.avatar} source={avatar} />
        </View>
      </View>
      <View style={s.mainSection}>
        <View style={s.mainTitle}>
          {perfil?.nome === "Inhas" ? (
            <>
              <Text style={s.text}>{perfil?.nome} pequinhas</Text>
              <Ionicons
                name="sparkles-outline"
                size={20}
                color={colors.textPrimary}
              />
            </>
          ) : (
            <>
              <Text style={s.text}>{perfil?.nome}</Text>
              <Ionicons
                name="paw-outline"
                size={20}
                color={colors.textPrimary}
              />
            </>
          )}
        </View>
        {activeTab === "home" ? (
          <View style={s.cardsContainer}>
            <Pressable style={s.cards}>
              <Ionicons name="bag-outline" size={25} color={colors.icons} />
              <Text style={s.cardText}>Compras</Text>
            </Pressable>
            <Pressable style={s.cards}>
              <Ionicons
                name="heart-circle-outline"
                size={25}
                color={colors.icons}
              />
              <Text style={s.cardText}>Lista de desejos</Text>
            </Pressable>
            <Pressable style={s.cards}>
              <Ionicons name="time-outline" size={25} color={colors.icons} />
              <Text style={s.cardText}>Histórico de compras</Text>
            </Pressable>
            <Pressable style={s.cards}>
              <Ionicons name="rainy-outline" size={25} color={colors.icons} />
              <Text style={s.cardText}>Arrependimento</Text>
            </Pressable>
          </View>
        ) : (
          <View style={s.configContainer}>
            <View style={s.configList}>
              <Pressable style={s.configItens}>
                <Ionicons name="man" size={20} color={"black"} />
                <Text>Avatar</Text>
              </Pressable>
              <Pressable style={s.configItens}>
                <Ionicons name="pencil" size={20} color={"black"} />
                <Text>Nome</Text>
              </Pressable>
              <Pressable style={s.configItens}>
                <Ionicons name="cash" size={20} color={"black"} />
                <Text>Salário</Text>
              </Pressable>
              <Pressable style={s.configItens} onPress={toggleTheme}>
                <Ionicons
                  name={isDark ? "sunny" : "moon"}
                  size={20}
                  color={"black"}
                />
                <Text>Tema</Text>
              </Pressable>
              <Pressable
                style={s.configItens}
                onPress={() => router.push("/(tabs)")}
              >
                <Ionicons name="arrow-back" size={20} color={"black"} />
                <Text>Sair</Text>
              </Pressable>
            </View>
          </View>
        )}
        <View style={s.navContainer}>
          <View style={s.navBar}>
            <Pressable
              style={[s.navItem, activeTab === "home" && s.navItemActive]}
              onPress={() => setActiveTab("home")}
            >
              <Ionicons
                name="home"
                size={25}
                color={
                  activeTab === "home" ? colors.iconsNav : colors.textPrimary
                }
              />
            </Pressable>
            <Pressable
              style={[s.navItem, activeTab === "config" && s.navItemActive]}
              onPress={() => setActiveTab("config")}
            >
              <Ionicons
                name="options"
                size={25}
                color={
                  activeTab === "config" ? colors.iconsNav : colors.textPrimary
                }
              />
            </Pressable>
          </View>
        </View>
      </View>
      <View style={s.footer}></View>
    </View>
  );
}
const style = (colors: typeof themes.light) =>
  StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      backgroundColor: colors.background,
      display: "flex",
    },
    headerSection: {
      marginTop: 45,
      backgroundColor: colors.background,
      position: "relative",
      height: 60,
    },
    avatarContainer: {
      position: "absolute",
      backgroundColor: colors.surface,
      padding: 6,
      borderRadius: 60,
      left: 130,
      top: 10,
      zIndex: 1000,
    },
    avatar: {
      backgroundColor: colors.background,
      width: 90,
      height: 90,
      borderRadius: 50,
    },
    mainSection: {
      position: "relative",
      backgroundColor: colors.surface,
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
      backgroundColor: colors.background,
      width: "85%",
      borderRadius: 7,
      gap: 5,
      padding: 7,
      marginTop: 60,
    },
    text: {
      fontFamily: "Montserrat_400Regular",
      fontSize: 20,
      textAlign: "center",
      color: colors.textPrimary,
    },
    cardsContainer: {
      marginTop: 120,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      columnGap: 15,
    },
    cards: {
      backgroundColor: colors.background,
      width: "45%",
      height: 120,
      marginBottom: 15,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    cardText: {
      fontFamily: "Montserrat_400Regular",
      color: colors.textPrimary,
      fontSize: 12,
    },
    navContainer: {
      position: "absolute",
      bottom: 50,
      flexGrow: 1,
      display: "flex",
      justifyContent: "center",
      alignSelf: "center",
    },
    navBar: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: colors.background,
      width: 210,
      height: 100,
      borderRadius: 100,
      padding: 10,
    },
    navItem: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: 80,
      height: 80,
      borderRadius: 50,
    },
    navItemActive: {
      backgroundColor: colors.surface,
    },
    configContainer: {
      width: "100%",
      height: "50%",
    },
    configList: {
      backgroundColor: colors.background,
      width: "90%",
      alignSelf: "center",
      marginTop: 20,
      padding: 7,
      display: "flex",
      gap: 5,
      borderRadius: 10,
    },
    configItens: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 3,
      padding: 5,
      height: 40,
      borderRadius: 7,
      backgroundColor: colors.primary,
    },
    footer: {
      width: "100%",
      height: 50,
      backgroundColor: colors.background,
    },
  });
