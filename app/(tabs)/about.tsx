import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Platform } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function AboutScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>About CodeQuest</ThemedText>
      <Collapsible title="What is CodeQuest?">
        <ThemedText>
          CodeQuest is a coding competition for high school students, organized
          by the University of Toronto Schools (UTS) Computer Science Club.
        </ThemedText>
      </Collapsible>
      <Collapsible title="How can I participate?">
        <ThemedText>
          You can participate in CodeQuest by forming a team of up to 3 members
          and registering on the{" "}
          <ExternalLink href="https://codequest.utscompsci.ca">
            CodeQuest website
          </ExternalLink>
          .
        </ThemedText>
      </Collapsible>
      <Collapsible title="How can I contact the organizers?">
        <ThemedText>
          You can contact the organizers by sending an email to{" "}
          <ExternalLink href="mailto:"></ExternalLink>
        </ThemedText>
      </Collapsible>
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
