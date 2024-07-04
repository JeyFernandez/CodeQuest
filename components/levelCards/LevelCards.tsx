
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from '../ThemedText';

interface LevelCardProps {
  levelNumber: number;
  levelTitle: string;
  levelDescription: string;
}

export const LevelCard: React.FC<LevelCardProps> = ({ levelNumber, levelTitle, levelDescription }) => {
  return (
    <View style={styles.card}>
      <ThemedText style={styles.levelNumber}>Nivel {levelNumber}</ThemedText>
      <ThemedText style={styles.title}>{levelTitle}</ThemedText>
      <ThemedText style={styles.description}>{levelDescription}</ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  levelNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
  },
});
