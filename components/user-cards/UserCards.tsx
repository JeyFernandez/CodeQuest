import {
  View,
  TouchableOpacity,
  StyleSheet,
  type ViewProps,
} from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import { ThemedText } from "../ThemedText";
import { useColorScheme } from "@/hooks/useColorScheme";

export type UserViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  titleCard: string;
  info: string;
  onPress: () => void;
};

export default function UserCards({
  style,
  lightColor,
  darkColor,
  titleCard,
  info,
  ...otherProps
}: UserViewProps) {
  const theme = useColorScheme();
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  const borderColor = theme === "light" ? "black" : "white";

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor, borderColor },
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
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
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
