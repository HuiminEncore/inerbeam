// import { useState, useEffect } from "react";
// import { useColorScheme } from "@/hooks/useColorScheme";
// import { ThemedText } from "@/components/ThemedText";
// import { fetchDeviceData } from "@/queries/graphql";
// import { ThemedView } from "@/components/ThemedView";
// import { ScrollView, View, StyleSheet } from "react-native";
// import { fetchDevices } from "@/queries/graphql";

// export default function HomeScreen() {
//   const systemColorScheme = useColorScheme();
//   const [isDarkMode, setIsDarkMode] = useState(systemColorScheme === "dark");
//   const [devices, setDevices] = useState<Device[]>([]);

//   useEffect(() => {
//     loadDevices();
//   }, []);

//   const loadDevices = async () => {
//     try {
//       const response = await fetchDevices();
//       if (response.listThings?.items) {
//         setDevices(response.listThings.items);
//       }
//     } catch (error) {
//       console.error("Error loading devices:", error);
//     }
//   };
//   return (
//     <ThemedView style={[styles.container, isDarkMode && styles.darkContainer]}>
//       <ThemedText style={styles.title}>My Devices</ThemedText>
//       {devices.length === 0 ? (
//         <ThemedText style={styles.noDevices}>No devices found</ThemedText>
//       ) : (
//         <ScrollView style={styles.deviceList}>
//           {devices.map((device) => (
//             <View key={device.id} style={styles.deviceCard}>
//               <ThemedText style={styles.deviceName}>
//                 {device.deviceName || device.deviceId}
//               </ThemedText>
//               <ThemedText style={styles.deviceInfo}>ID: {device.id}</ThemedText>
//               <ThemedText style={styles.deviceInfo}>
//                 Device ID: {device.deviceId}
//               </ThemedText>
//               <ThemedText style={styles.deviceInfo}>
//                 Type: {device.deviceType}
//               </ThemedText>
//               <ThemedText style={styles.deviceInfo}>
//                 Created: {new Date(device.createdAt).toLocaleDateString()}
//               </ThemedText>
//               <ThemedText style={styles.deviceInfo}>
//                 Updated: {new Date(device.updatedAt).toLocaleDateString()}
//               </ThemedText>
//             </View>
//           ))}
//         </ScrollView>
//       )}
//     </ThemedView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   darkContainer: {
//     backgroundColor: "#1a1a1a",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 16,
//   },
//   deviceList: {
//     flex: 1,
//   },
//   deviceCard: {
//     padding: 16,
//     marginBottom: 12,
//     borderRadius: 8,
//     backgroundColor: "#f5f5f5",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   deviceName: {
//     fontSize: 18,
//     color: "black",
//     fontWeight: "600",
//     marginBottom: 8,
//   },
//   deviceInfo: {
//     fontSize: 14,
//     color: "#666",
//     marginBottom: 4,
//   },
//   noDevices: {
//     textAlign: "center",
//     marginTop: 24,
//     fontSize: 16,
//     color: "#666",
//   },
//   dataContainer: {
//     marginTop: 8,
//     padding: 8,
//     backgroundColor: "#fff",
//     borderRadius: 4,
//   },
//   dataText: {
//     fontSize: 12,
//     color: "#333",
//   },
// });
