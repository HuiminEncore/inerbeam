import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { Header } from "@/components/Header";
import { ImageContainer } from "@/components/ImageContainer";
import { useLocalSearchParams } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { MetricDisplay } from "./component/MetricDisplay";
import { Colors } from "@/constants/Colors";

export default function DeviceScreen() {
  const { id } = useLocalSearchParams();
  const mockdata = [
    {
      icon: "temperature",
      name: "Temperature",
      value: 20,
      unit: "°C",
      id: 1,
    },
    {
      icon: "humidity",
      name: "Humidity",
      value: 50,
      unit: "%",
      id: 2,
    },
    {
      icon: "co2",
      name: "CO2",
      value: 400,
      unit: "ppm",
      id: 3,
    },
  ];
  return (
    <ThemedView style={styles.container}>
      <ImageContainer />
      <Header title="Edisens" leftIconName="back" rightIconName="plus" />
      <ThemedText style={styles.title}>Details of user {id} </ThemedText>
      <ThemedView style={styles.metricsContainer}>
        {mockdata.map((item) => (
          <MetricDisplay
            icon={item.icon}
            name={item.name}
            value={item.value}
            unit={item.unit}
            deviceId={id as any}
            link={`/(tabs)/(AAhome)/device/metrix/${item.id}`}
          />
        ))}
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  title: {
    color: Colors.light.black,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  metricsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginHorizontal: 20,
    flexWrap: "wrap",
    backgroundColor: "transparent",
  },
});
