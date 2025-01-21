import { Tabs } from "expo-router";
import React from "react";
import { Pressable, Image } from "react-native";
import { Colors } from "@/constants/Colors";
// import { useColorScheme } from "@/hooks/useColorScheme";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabLayout() {
  // const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.blue,
        tabBarInactiveTintColor: Colors.light.black,
        headerShown: false,
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          paddingTop: 6,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          marginTop: 2,
        },
      }}
    >
      <Tabs.Screen
        name="(AAhome)"
        options={{
          title: "Dispositivos",
          tabBarLabel: "Dispositivos",
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={require("../../assets/Icons/Dispositivos_Black.svg")}
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(Espacios)"
        options={{
          title: "Espacios",
          tabBarLabel: "Espacios",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/Icons/Espacios_Black.svg")}
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(Dashboard)"
        options={{
          title: "Dashboard",
          tabBarLabel: "Dashboard",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/Icons/Dashboard_Black.svg")}
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(Alertas)"
        options={{
          title: "Alertas",
          tabBarLabel: "Alertas",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/Icons/Alertas_Black.svg")}
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(Ajustes)"
        options={{
          title: "Ajustes",
          tabBarLabel: "Ajustes",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/Icons/Ajustes_Black.svg")}
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
