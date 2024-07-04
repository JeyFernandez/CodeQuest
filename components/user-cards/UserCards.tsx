import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  type ViewProps,
} from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import { ThemedText } from "../ThemedText";

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
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return (
    <TouchableOpacity style={[{ backgroundColor }, style]} {...otherProps}>
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <ThemedText type="subtitle">{titleCard}</ThemedText>
        </View>
        <ThemedText type="default">{info}</ThemedText>
      </View>
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
  },
  containerTitle: {},
  info: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 16,
  },
});
