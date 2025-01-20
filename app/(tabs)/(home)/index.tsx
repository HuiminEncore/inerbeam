import { StyleSheet, ScrollView, TextInput, View } from "react-native";
import { useState, useEffect } from "react";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Ionicons } from "@expo/vector-icons";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { fetchDevices, fetchDeviceData } from "@/queries/graphql";
import { Link } from "expo-router";

export default function HomeScreen() {
  const systemColorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(systemColorScheme === "dark");
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
        // Fetch data for the first device (assuming it's the weather sensor)
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

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };
  const handleWeatherWidgetClick = () => {
    console.log("Weather widget clicked");
  };
  return (
    <ThemedView style={[styles.container, isDarkMode && styles.darkContainer]}>
      {/* <ThemedView style={[styles.header, isDarkMode && styles.darkHeader]}>
        <View style={styles.profileHeader}>
          <View style={styles.avatar}>
            <Ionicons name="person-outline" size={40} color="#666" />
          </View>
        </View>
        <ThemedView style={styles.headerIcons}>
          <Ionicons
            name={isDarkMode ? "sunny-outline" : "moon-outline"}
            size={24}
            color={isDarkMode ? "white" : "black"}
            onPress={toggleTheme}
            tooltip="Toggle theme"
          />
          <Ionicons
            name="add-outline"
            size={24}
            color={isDarkMode ? "white" : "black"}
            tooltip="Add new device"
          />
          <Ionicons
            name="ellipsis-horizontal"
            size={24}
            color={isDarkMode ? "white" : "black"}
            tooltip="Settings"
          />
        </ThemedView>
      </ThemedView> */}
      {/* Info Banner */}
      <ThemedView
        style={[styles.searchBar, isDarkMode && styles.darkSearchBar]}
      >
        <Ionicons
          name="search-outline"
          size={24}
          color={isDarkMode ? "white" : "black"}
        />
        <TextInput
          style={[styles.searchInput, isDarkMode && styles.darkText]}
          placeholder="Search..."
          placeholderTextColor={isDarkMode ? "#999" : "#666"}
        />
      </ThemedView>
      <ScrollView>
        <ThemedView style={styles.widgetsContainer}>
          <ThemedView style={styles.widgetRow}>
            <Link href="/(tabs)/(home)/data" style={styles.widgetLink}>
              <ThemedView
                style={[
                  styles.widget,
                  styles.weatherWidget,
                  isDarkMode && styles.darkWidget,
                ]}
                onTouchEnd={handleWeatherWidgetClick}
              >
                <>
                  <Ionicons name="sunny" size={32} color="#FFB800" />
                  <ThemedText
                    type="title"
                    style={[styles.weatherText, isDarkMode && styles.darkText]}
                  >
                    {latestData?.temperature || "--"}°C
                  </ThemedText>
                  <ThemedText
                    style={[
                      styles.weatherText,
                      isDarkMode && styles.darkText,
                      { fontSize: 12 },
                    ]}
                  >
                    Humidity: {latestData?.humidity || "--"}%
                  </ThemedText>
                  <ThemedText
                    style={[
                      styles.weatherText,
                      isDarkMode && styles.darkText,
                      { fontSize: 12 },
                    ]}
                  >
                    CO2: {latestData?.co2 || "--"}ppm
                  </ThemedText>
                </>
              </ThemedView>
            </Link>
            <Link href="/(tabs)/(home)/devices" style={styles.widgetLink}>
              <ThemedView
                style={[
                  styles.widget,
                  styles.devicesWidget,
                  isDarkMode && styles.darkWidget,
                ]}
              >
                <ThemedView style={styles.devicesContent}>
                  <Ionicons
                    name="grid-outline"
                    size={20}
                    color={isDarkMode ? "white" : "#4A6DFF"}
                  />
                  <ThemedText
                    type="subtitle"
                    style={[styles.devicesText, isDarkMode && styles.darkText]}
                    numberOfLines={1}
                  >
                    All Devices ({devices.length})
                  </ThemedText>
                </ThemedView>
              </ThemedView>
            </Link>
          </ThemedView>
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  profileHeader: {
    alignItems: "center",
    marginBottom: 32,
    marginTop: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "transparent",
    padding: 16,
    paddingTop: 48,
  },
  headerText: {
    color: "black",
    fontSize: 20,
  },
  headerIcons: {
    backgroundColor: "transparent",
    flexDirection: "row",
    gap: 16,
  },
  searchBar: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
    marginBottom: 2,
    marginLeft: 16,
    marginRight: 16,
    paddingVertical: 2,
    paddingHorizontal: 16,
    borderRadius: 12,
    gap: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchInput: {
    color: "black",
    flex: 1,
    fontSize: 15,
    padding: 2,
  },
  widgetsContainer: {
    backgroundColor: "transparent",
    padding: 16,
  },
  widgetRow: {
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
  },
  widgetLink: {
    width: "48%",
  },
  widget: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    height: 150,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  weatherWidget: {
    backgroundColor: "white",
  },
  devicesWidget: {
    height: 150,
  },
  devicesContent: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "transparent",
    gap: 12,
  },
  devicesText: {
    color: "black",
    fontSize: 12,
    flex: 1,
  },
  baseText: {
    color: "black",
  },
  weatherText: {
    color: "black",
    fontSize: 24,
  },
  // Dark mode styles
  darkContainer: {
    backgroundColor: "#1a1a1a",
  },
  darkHeader: {
    backgroundColor: "transparent",
  },
  darkSearchBar: {
    backgroundColor: "#333",
  },
  darkText: {
    color: "white",
  },
  darkWidget: {
    backgroundColor: "#333",
  },
});
