import { StyleSheet } from "react-native";
import { Image } from "expo-image";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";

interface WeatherCardProps {
  type: "co2" | "temperature";
  value: number;
  deviceName: string;
  userName: string;
  deviceType: string;
  link: string;
}

export default function WeatherCard({
  type,
  value,
  deviceName,
  userName,
  deviceType,
  link,
}: WeatherCardProps) {
  const getIcon = () => {
    switch (type) {
      case "co2":
        return (
          <Image
            source={require("../../../../assets/Icons/Metricas/CO2.svg")}
            style={{ width: 42, height: 42, resizeMode: "contain" }}
          />
        );
      case "temperature":
        return (
          <Image
            source={require("../../../../assets/Icons/Metricas/TemperaturaRed.svg")}
            style={{ width: 42, height: 42, resizeMode: "contain" }}
          />
        );
      default:
        return null;
    }
  };

  const getUnit = () => {
    return type === "co2" ? "%" : "°C";
  };

  return (
    <Link href={link as any} style={styles.widgetLink}>
      <ThemedView style={styles.weatherWidget}>
        <ThemedView style={styles.topRow}>
          <ThemedView style={styles.iconSection}>{getIcon()}</ThemedView>
          <ThemedView style={styles.divider} />
          <ThemedView style={styles.valueSection}>
            <ThemedText type="title" style={styles.topText} numberOfLines={1}>
              {value}
            </ThemedText>
            <ThemedText type="title" style={styles.unitText}>
              {getUnit()}
            </ThemedText>
          </ThemedView>
        </ThemedView>
        <ThemedView style={styles.bottomRow}>
          <ThemedText style={styles.contentText} numberOfLines={1}>
            {deviceName}
          </ThemedText>
          <ThemedText style={styles.contentText} numberOfLines={1}>
            {deviceType} | {userName}
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </Link>
  );
}

const styles = StyleSheet.create({
  widgetLink: {
    width: "48%",
    backgroundColor: "transparent",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    height: 120,
  },
  weatherWidget: {
    borderRadius: 16,
    flexDirection: "column",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },
  topRow: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: 12,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  iconSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  valueSection: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height: "100%",
  },
  valueContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: "red",
  },
  divider: {
    width: 1,
    height: 34,
    backgroundColor: "#E5E7EB",
    marginHorizontal: 8,
  },
  topText: {
    color: "black",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 24,
  },
  unitText: {
    color: "black",
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 12,
    marginTop: 6,
  },
  bottomRow: {
    backgroundColor: "white",
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 16,
    gap: 8,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  contentText: {
    color: "black",
    fontWeight: "500",
    textAlign: "left",
    fontSize: 10,
    lineHeight: 12,
  },
});
