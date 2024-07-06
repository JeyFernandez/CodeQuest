// app/screen/IntermediateScreen.tsx
import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

const IntermediateScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contenido del Nivel Intermedio</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
});

export default IntermediateScreen;
