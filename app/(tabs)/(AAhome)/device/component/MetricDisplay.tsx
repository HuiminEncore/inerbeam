import React from "react";
import { View, StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { Image } from "expo-image";
import { Link } from "expo-router";
interface MetricDisplayProps {
  icon: string;
  name: string;
  value: number;
  unit: string;
  deviceId: number;
  link: string;
}

export const MetricDisplay = ({
  icon,
  name,
  value,
  unit,
  deviceId,
  link,
}: MetricDisplayProps) => {
  const metrixLink = [
    {
      icon: "temperature",
      link: require("../../../../../assets/Icons/Metricas/TemperaturaRed.svg"),
    },
    {
      icon: "humidity",
      link: require("../../../../../assets/Icons/Metricas/HumidityRelative.svg"),
    },
    {
      icon: "co2",
      link: require("../../../../../assets/Icons/Metricas/CO2.svg"),
    },
    {
      icon: "uv",
      link: require("../../../../../assets/Icons/Metricas/SunUV.svg"),
    },
  ];
  return (
    <View style={styles.container}>
      <Link href={link as any} style={styles.widgetLink}>
        <View style={styles.iconContainer}>
          <Image
            source={metrixLink.find((item) => item.icon === icon)?.link}
            style={styles.icon}
          />
        </View>
        <View style={styles.valueContainer}>
          <View style={styles.topRow}>
            <ThemedText style={styles.value}>{value}</ThemedText>
            <ThemedText style={styles.unit}>{unit}</ThemedText>
          </View>
          <ThemedText style={styles.name}>{name}</ThemedText>
        </View>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    width: "48%",
    gap: 12,
  },
  widgetLink: {
    flex: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  valueContainer: {
    flex: 1,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 4,
  },
  value: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.light.black,
  },
  unit: {
    fontSize: 14,
    color: Colors.light.gray,
  },
  name: {
    fontSize: 14,
    color: Colors.light.gray,
    marginTop: 2,
  },
});
