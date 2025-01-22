import { StyleSheet, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import { ThemedView } from "@/components/ThemedView";
import { fetchDevices, fetchDeviceData } from "@/queries/graphql";
import Header from "@/components/Header";

import SearchBar from "@/components/SearchBar";
import { ImageContainer } from "@/components/ImageContainer";
import WeatherCard from "./component/WeatherCard";

export default function HomeScreen() {
  const [devices, setDevices] = useState<any[]>([]);
  const [latestData, setLatestData] = useState<any>(null);

  useEffect(() => {
    loadDevices();
  }, []);

  const loadDevices = async () => {
    try {
      const response = await fetchDevices();
      if (response.listThings?.items) {
        setDevices(response.listThings.items);
        if (response.listThings.items.length > 0) {
          const deviceData = await fetchDeviceData();
          if (deviceData.listData?.items?.length > 0) {
            setLatestData(JSON.parse(deviceData.listData.items[0].device_data));
          }
        }
      }
    } catch (error) {
      console.error("Error loading devices:", error);
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ImageContainer />
      <Header title="Edisens" leftIconName="user" rightIconName="plus" />
      <SearchBar />
      <ScrollView>
        <ThemedView style={styles.widgetsContainer}>
          <ThemedView style={styles.widgetRow}>
            {devices.map((device) => (
              <WeatherCard
                key={device.id}
                type="temperature"
                value={latestData?.temperature || "--"}
                deviceName={device?.deviceName || "Dispositivo 1"}
                userName={"Encore-Lab"}
                deviceType={device?.deviceType || "Sensor T"}
                link={`/(tabs)/(AAhome)/device/${device?.deviceId}`}
              />
            ))}
            {/* //   <WeatherCard
            //     type="temperature"
            //     value={latestData?.temperature || "--"}
            //     deviceName={device?.name || "Dispositivo 1"}
            //     userName={device?.user_name || "Encore-Lab"}
            //   deviceType={devices[0]?.device_type || "Sensor T"}
            //   link={`/(tabs)/(AAhome)/device/${devices[0]?.id}`}
            // />
            // <WeatherCard
            //   type="co2"
            //   value={latestData?.co2 || "--"}
            //   deviceName={devices[1]?.name || "Dispositivo 2"}
            //   userName={devices[1]?.user_name || "Encore-Lab"}
            //   deviceType={devices[1]?.device_type || "Sensor CO2"}
            //   link={`/(tabs)/(AAhome)/device/${devices[1]?.id}`}
            // /> */}
          </ThemedView>
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  backgroundImageContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "transparent",
    padding: 16,
    paddingTop: 48,
  },
  widgetsContainer: {
    backgroundColor: "transparent",
    padding: 16,
  },
  widgetRow: {
    backgroundColor: "transparent",
    flexDirection: "row",
    gap: 8,
    flexWrap: "wrap",
    width: "100%",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-between",
  },
});
