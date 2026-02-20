import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: "#7d57c9" },
        headerShadowVisible: false,
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: "#3b226b" },
        tabBarActiveTintColor: "white",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Login",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "log-in-sharp" : "log-in-outline"}
              size={20}
              color={"white"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "Sobre",
          headerTitle: "About",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={
                focused
                  ? "information-circle-sharp"
                  : "information-circle-outline"
              }
              size={20}
              color={"white"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
