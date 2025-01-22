// import { useState, useEffect } from "react";
// import { useColorScheme } from "@/hooks/useColorScheme";
// import { Ionicons } from "@expo/vector-icons";
// import { ThemedText } from "@/components/ThemedText";
// import { ThemedView } from "@/components/ThemedView";
// import { fetchDeviceData } from "@/queries/graphql";
// import { Link } from "expo-router";
// import { StyleSheet } from "react-native";

// export default function HomeScreen() {
//   const systemColorScheme = useColorScheme();
//   const [isDarkMode, setIsDarkMode] = useState(systemColorScheme === "dark");
//   const [deviceData, setDeviceData] = useState<any>(null);

//   useEffect(() => {
//     loadDevices();
//   }, []);

//   const loadDevices = async () => {
//     try {
//       const response = await fetchDeviceData();
//       if (response.listData?.items) {
//         setDeviceData(response.listData.items);
//       }
//     } catch (error) {
//       console.error("Error loading devices:", error);
//     }
//   };

//   const parseDeviceData = (device: any) => {
//     const data = JSON.parse(device.device_data);
//     return {
//       deviceId: data.deviceId,
//       temperature: data.temperature,
//       humidity: data.humidity,
//       battery: data.battery,
//       time: data.time,
//       tvoc: data.tvoc,
//       co2: data.co2,
//       pressure: data.pressure,
//     };
//   };

//   return (
//     <ThemedView style={styles.devicesList}>
//       {deviceData &&
//         deviceData.map((device: any) => {
//           const data = parseDeviceData(device);
//           return (
//             <ThemedView
//               key={device.id}
//               style={[styles.deviceItem, isDarkMode && styles.darkWidget]}
//             >
//               <ThemedView style={styles.deviceItemLeft}>
//                 <Ionicons
//                   name="hardware-chip-outline"
//                   size={24}
//                   color={isDarkMode ? "white" : "#4A6DFF"}
//                 />
//                 <ThemedView style={styles.deviceInfo}>
//                   <ThemedText
//                     style={[styles.deviceName, isDarkMode && styles.darkText]}
//                   >
//                     Device: {data.deviceId}
//                   </ThemedText>
//                   <ThemedView style={styles.readings}>
//                     <ThemedText
//                       style={[
//                         styles.readingText,
//                         isDarkMode && styles.darkSubText,
//                       ]}
//                     >
//                       🌡️ {data.temperature}°C
//                     </ThemedText>
//                     <ThemedText
//                       style={[
//                         styles.readingText,
//                         isDarkMode && styles.darkSubText,
//                       ]}
//                     >
//                       💧 {data.humidity}%
//                     </ThemedText>
//                     <ThemedText
//                       style={[
//                         styles.readingText,
//                         isDarkMode && styles.darkSubText,
//                       ]}
//                     >
//                       🔋 {data.battery}%
//                     </ThemedText>
//                     <ThemedText
//                       style={[
//                         styles.readingText,
//                         isDarkMode && styles.darkSubText,
//                       ]}
//                     >
//                       🌫️ TVOC: {data.tvoc}
//                     </ThemedText>
//                     <ThemedText
//                       style={[
//                         styles.readingText,
//                         isDarkMode && styles.darkSubText,
//                       ]}
//                     >
//                       CO₂: {data.co2}
//                     </ThemedText>
//                   </ThemedView>
//                 </ThemedView>
//               </ThemedView>
//               <ThemedText
//                 style={[styles.timestamp, isDarkMode && styles.darkSubText]}
//               >
//                 {new Date(data.time).toLocaleTimeString()}
//               </ThemedText>
//             </ThemedView>
//           );
//         })}
//     </ThemedView>
//   );
// }

// const styles = StyleSheet.create({
//   devicesList: {
//     padding: 16,
//     gap: 16,
//     flex: 1,
//   },
//   deviceItem: {
//     backgroundColor: "#ffffff",
//     borderRadius: 16,
//     padding: 20,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowOpacity: 0.15,
//     shadowRadius: 8,
//     elevation: 5,
//   },
//   darkWidget: {
//     backgroundColor: "#1C1C1E",
//     shadowColor: "#000",
//     shadowOpacity: 0.3,
//   },
//   deviceItemLeft: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 16,
//   },
//   deviceInfo: {
//     flex: 1,
//   },
//   deviceName: {
//     fontSize: 18,
//     fontWeight: "700",
//     marginBottom: 12,
//     color: "#000000",
//   },
//   darkText: {
//     color: "white",
//   },
//   readings: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     gap: 12,
//     marginTop: 4,
//   },
//   readingText: {
//     fontSize: 15,
//     color: "white",
//     fontWeight: "500",
//   },
//   darkSubText: {
//     color: "white",
//   },
//   timestamp: {
//     fontSize: 13,
//     color: "#787878",
//     marginTop: 12,
//     fontWeight: "500",
//   },
// });
