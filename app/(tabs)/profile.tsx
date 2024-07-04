import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Platform } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function ProfileScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Hi Profile name</ThemedText>
      <ThemedView style={styles.subContainer}>
        <ThemedText style={styles.text}>This is page of profle</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  subContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 16,
  },
});
