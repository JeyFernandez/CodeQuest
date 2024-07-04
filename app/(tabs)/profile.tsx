import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Platform } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import UserCards from "@/components/user-cards/UserCards";

const DataCardsProfile = [
  {
    title: "Informacion",
    Info: "Esto es una prueva",
    onPress: () => {
      alert("Estok haciedo Clik En Informacion");
    },
  },
  {
    title: "Contact",
    Info: "Esto es una prueva",
    onPress: () => {
      alert("Estok haciedo Clik En Contacto");
    },
  },
];

export default function ProfileScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Hi Profile name</ThemedText>
      <ThemedView>
        {DataCardsProfile.map((item, index) => (
          <UserCards
            key={index}
            titleCard={item.title}
            info={item.Info}
            onPress={() => {
              item.onPress();
            }}
          />
        ))}
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
