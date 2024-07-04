import { StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>
        Welcome to the CodeQuest in {Platform.OS}!
      </ThemedText>
      <HelloWave />
      <ThemedText style={styles.subtitle}>
        This is a simple example of a parallax scroll view with a header image
        that scales and translates as you scroll.
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 16,
  },
  reactLogo: {
    width: 200,
    height: 200,
    marginTop: 16,
  },
});
