import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ThemedView } from "./ThemedView"; // Assuming ThemedView is imported from a local file

interface SearchBarProps {
  onChangeText?: (text: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  onChangeText,
  placeholder = "Search...",
}: SearchBarProps) {
  return (
    <ThemedView style={styles.searchBar}>
      <Ionicons name="search-outline" size={24} color="black" />
      <TextInput
        style={styles.searchInput}
        placeholder={placeholder}
        placeholderTextColor="#666"
        onChangeText={onChangeText}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
    marginBottom: 2,
    marginLeft: 16,
    marginRight: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
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
});
