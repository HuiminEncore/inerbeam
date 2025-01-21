import { View, Image, StyleSheet } from "react-native";
import React from "react";

export const ImageContainer = () => {
  return (
    <View style={styles.backgroundImageContainer}>
      <Image
        source={require("../assets/images/background.png")}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
});
