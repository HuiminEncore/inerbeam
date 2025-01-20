import { Tabs } from "expo-router";
import React from "react";
import { Pressable } from "react-native";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: true,
        headerStyle: {
          backgroundColor: Colors[colorScheme ?? "light"].background,
        },
        headerTintColor: Colors[colorScheme ?? "light"].text,
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          headerTitle: "Edisens",
          headerTitleAlign: "center",
          headerLeft: () => (
            <>
              <Pressable
                onPress={() => {
                  // Add your profile button action here
                }}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                  marginLeft: 26,
                })}
              >
                <FontAwesome
                  name="user-circle"
                  size={25}
                  color={Colors[colorScheme ?? "light"].text}
                />
              </Pressable>
            </>
          ),
          headerRight: () => (
            <>
              <Pressable
                onPress={() => {
                  // Add your plus button action here
                }}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                  marginRight: 26,
                })}
              >
                <FontAwesome
                  name="plus"
                  size={25}
                  color={Colors[colorScheme ?? "light"].text}
                />
              </Pressable>
            </>
          ),
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(settings)"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
