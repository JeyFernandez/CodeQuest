// app/(tabs)/index.tsx
import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@/components/types/NavigationTypes";
import LevelCard from "@/components/levelCards/LevelCards";

const levelCards = [
  {
    levelNumber: 1,
    levelTitle: "Básic",
    levelDescription: "Descripción del Nivel Básico",
    onPress: () => {},
  },
  {
    levelNumber: 2,
    levelTitle: "Intermedio",
    levelDescription: "Descripción del Nivel Intermedio",
    onPress: () => {},
  },
  {
    levelNumber: 3,
    levelTitle: "Experto",
    levelDescription: "Descripción del Nivel Experto",
    onPress: () => {},
  },
];

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const levelCardsWithNavigation = levelCards.map((card) => ({
    ...card,
    onPress: () =>
      navigation.navigate(card.levelTitle as keyof RootStackParamList),
  }));

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {levelCardsWithNavigation.map((levelCard) => (
        <LevelCard
          key={levelCard.levelNumber}
          levelNumber={levelCard.levelNumber}
          levelTitle={levelCard.levelTitle}
          levelDescription={levelCard.levelDescription}
          onPress={levelCard.onPress}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
});
