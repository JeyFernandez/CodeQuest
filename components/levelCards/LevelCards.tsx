import {
  View,
  TouchableOpacity,
  StyleSheet,
  type ViewProps,
} from "react-native";
import { ThemedText } from "../ThemedText";
import { useColorScheme } from "@/hooks/useColorScheme";
export type LevelCardProps = ViewProps & {
  levelNumber: number;
  levelTitle: string;
  levelDescription: string;
  onPress: () => void;
};

export default function LevelCard({
  style,
  levelNumber,
  levelTitle,
  levelDescription,
  ...otherProps
}: LevelCardProps) {
  const theme = useColorScheme();
  const backgroundColor = theme === "light" ? "white" : "#161616";
  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor }, style]}
      {...otherProps}>
      <ThemedText>{levelNumber}</ThemedText>
      <ThemedText>{levelTitle}</ThemedText>
      <ThemedText>{levelDescription}</ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  levelNumber: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
  },
});
