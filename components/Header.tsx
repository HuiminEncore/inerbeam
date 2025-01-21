import { StyleSheet, View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { Colors } from "@/constants/Colors";

interface HeaderProps {
  onProfilePress?: () => void;
  onNotificationPress?: () => void;
  title?: string;
  leftIconName?: string;
  rightIconName?: string;
}

export function Header({
  onProfilePress,
  onNotificationPress,
  title = "Edisens",
  leftIconName = "user",
  rightIconName = "plus",
}: HeaderProps) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onProfilePress}>
        {leftIconName === "user" && (
          <ThemedView style={styles.leftIcon}>
            <FontAwesome name={"user"} size={24} color={Colors.light.gray} />
          </ThemedView>
        )}
        {leftIconName === "back" && (
          <ThemedView style={styles.backIcon}>
            <FontAwesome
              name="chevron-left"
              size={24}
              color={Colors.light.gray}
            />
            <ThemedText style={styles.backText}>Volver</ThemedText>
          </ThemedView>
        )}
      </TouchableOpacity>
      <ThemedText style={styles.title}>{title}</ThemedText>
      <TouchableOpacity onPress={onNotificationPress}>
        <FontAwesome
          name={rightIconName as any}
          size={24}
          color={Colors.light.gray}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 24,
    backgroundColor: "transparent",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.light.gray,
  },
  leftIcon: {
    backgroundColor: Colors.light.white,
    width: 48,
    height: 48,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  backIcon: {
    backgroundColor: "transparent",
    width: 48,
    height: 48,
    borderRadius: 100,
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  backText: {
    fontSize: 16,
    color: Colors.light.gray,
    fontWeight: "bold",
  },
});
