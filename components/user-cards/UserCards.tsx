import {
  View,
  TouchableOpacity,
  StyleSheet,
  type ViewProps,
} from "react-native";

import { ThemedText } from "../ThemedText";
import { useColorScheme } from "@/hooks/useColorScheme";

export type UserViewProps = ViewProps & {
  titleCard: string;
  info: string;
  onPress: () => void;
};

export default function UserCards({
  style,
  titleCard,
  info,
  ...otherProps
}: UserViewProps) {
  const theme = useColorScheme();
  // const borderColor = theme === "light" ? "black" : "#3f3D3D";
  const backgroundColor = theme === "light" ? "white" : "#161616";

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor },
        style, // para permitir la personalización adicional del estilo
      ]}
      {...otherProps}>
      <View style={styles.containerTitle}>
        <ThemedText type="subtitle">{titleCard}</ThemedText>
      </View>
      <ThemedText type="default">{info}</ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    // borderWidth: 1,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  containerTitle: {
    marginBottom: 8,
  },
  info: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 16,
  },
});
