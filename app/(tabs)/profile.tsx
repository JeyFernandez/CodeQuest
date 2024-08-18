import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Platform, View, Text } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import UserCards from "@/components/user-cards/UserCards";
import BtnSaludo from "@/components/BtnSaludo";

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
      <View style={styles.saludo}>
        <Text style={styles.titleSaludo}> Hola Mundo</Text>
        <View style={styles.info}>
          <Text style={styles.lorem}>
            = Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
            quis tempore necessitatibus odit sed enim sit quaerat minima, nulla
            voluptatem illum! Ad ab unde quod? Impedit debitis ut harum
            doloribus.
          </Text>
          <BtnSaludo />
        </View>
      </View>
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
  saludo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  titleSaludo: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  info: {
    backgroundColor: "blue",
    padding: 16,
    borderRadius: 8,
  },
  lorem: {
    color: "white",
    fontSize: 16,
  },
});
