import React from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

// Define the props type
interface ButtonsCounterProps {
  title: string; // The title must be a string
  onPress: (event: GestureResponderEvent) => void; // Function triggered on press
  backgroundColor?: string; // Optional background color
}

export default function ButtonsCounter({
  title,
  onPress,
  backgroundColor,
}: ButtonsCounterProps) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: backgroundColor || "blue" }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    elevation: 10,
  },
});
