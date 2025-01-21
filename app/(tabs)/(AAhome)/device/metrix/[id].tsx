import { StyleSheet, Dimensions, View } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { Header } from "@/components/Header";
import { ImageContainer } from "@/components/ImageContainer";
// import { useLocalSearchParams } from "expo-router";
import { ThemedText } from "@/components/ThemedText";

export default function DeviceScreen() {
  // const { id } = useLocalSearchParams();

  return (
    <ThemedView style={styles.container}>
      <ImageContainer />
      <Header title="Temperature" leftIconName="back" rightIconName="plus" />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
});
