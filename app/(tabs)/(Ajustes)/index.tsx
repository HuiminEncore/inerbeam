import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { ThemedView } from "@/components/ThemedView";
import { ImageContainer } from "@/components/ImageContainer";

export default function AjustesScreen() {
  const menuItems = [
    {
      title: "Third-Party Services",
      icon: "link-outline",
      route: "/settings/services",
    },
  ];

  return (
    <ThemedView style={styles.container}>
      <ImageContainer />
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <View style={styles.avatar}>
          <Ionicons name="person-outline" size={40} color="#666" />
        </View>
        <Text style={styles.username}>Username</Text>
      </View>

      {/* Menu Items */}
      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <Link key={index} href={item.route as any} asChild>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuItemContent}>
                <Ionicons name={item.icon as any} size={24} color="#666" />
                <Text style={styles.menuItemText}>{item.title}</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#ccc" />
            </TouchableOpacity>
          </Link>
        ))}
      </View>

      {/* Exit Button */}
      <TouchableOpacity style={styles.exitButton}>
        <Text style={styles.exitText}>Exit</Text>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
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
  username: {
    fontSize: 20,
    fontWeight: "600",
  },
  menuContainer: {
    flex: 1,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  menuItemContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuItemText: {
    fontSize: 16,
    marginLeft: 12,
  },
  exitButton: {
    paddingVertical: 16,
    alignItems: "center",
  },
  exitText: {
    fontSize: 16,
    color: "#666",
  },
});
