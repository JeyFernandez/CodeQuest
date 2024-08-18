import { TouchableOpacity, View, StyleSheet, Text } from "react-native";

export default function BtnSaludo() {
  const onpress = () => {
    alert("Saludando 👋");
    console.log("Saludando 👋 en consola");
  };
  return (
    <View style={Estilos.containerbtn}>
      <TouchableOpacity
        onPress={() => {
          onpress();
        }}>
        <Text>Saludo</Text>
      </TouchableOpacity>
    </View>
  );
}

const Estilos = StyleSheet.create({
  btStyles: {
    color: "white",
    textAlign: "center",
  },
  containerbtn: {
    marginTop: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "green",
  },
  Text: {
    color: "white",
  },
});
