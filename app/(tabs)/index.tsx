import { LevelCard } from '@/components/levelCards/LevelCards';
import React from 'react';
import { StyleSheet, Platform, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LevelCard
        levelNumber={1}
        levelTitle="Introducción a la Programación"
        levelDescription="Este nivel cubre los fundamentos básicos de la programación, incluyendo conceptos como variables, funciones y estructuras de control."
      />
      <LevelCard
        levelNumber={2}
        levelTitle="Programación Intermedia"
        levelDescription="Este nivel expande los conocimientos básicos y cubre temas más avanzados como estructuras de datos, algoritmos y desarrollo de aplicaciones básicas."
      />
      <LevelCard
        levelNumber={3}
        levelTitle="Programación Avanzada"
        levelDescription="En este nivel, se profundiza en técnicas avanzadas de programación, optimización de código y desarrollo de aplicaciones complejas."
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
