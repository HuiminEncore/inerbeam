import { Tabs } from 'expo-router';
import React from 'react';
import { Image } from 'react-native';
import { Colors } from '@/constants/Colors';

export default function TabLayout() {
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
          title: 'Dispositivos',
          tabBarLabel: 'Dispositivos',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../assets/Icons/PNG/Dispositivos_Black.png')}
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(Espacios)"
        options={{
          title: 'Espacios',
          tabBarLabel: 'Espacios',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../assets/Icons/PNG/Espacios_Black.png')}
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(Dashboard)"
        options={{
          title: 'Dashboard',
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../assets/Icons/PNG/Dashboard_Black.png')}
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(Alertas)"
        options={{
          title: 'Alertas',
          tabBarLabel: 'Alertas',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../assets/Icons/PNG/Alertas_Black.png')}
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(Ajustes)"
        options={{
          title: 'Ajustes',
          tabBarLabel: 'Ajustes',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../assets/Icons/PNG/Ajustes_Black.png')}
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
