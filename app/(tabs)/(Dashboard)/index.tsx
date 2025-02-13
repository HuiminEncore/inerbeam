import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import { ImageContainer } from "@/components/ImageContainer";

export default function DashboardScreen() {
  return (
    <ThemedView style={styles.container}>
      <ImageContainer />
      <Header title="Edisens" leftIconName="user" rightIconName="plus" />
      <SearchBar />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
});
