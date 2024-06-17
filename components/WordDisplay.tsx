import { View, StyleSheet } from 'react-native';
import React from 'react';
import { Letter } from '@/components/Letter';

export function WordDisplay({ word, revealedLetters }){
  return (
    <View style={styles.wordContainer}>
      {word.map((letter, index) => (
        <Letter key={index} letter={revealedLetters.includes(letter) ? letter : '_'} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wordContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
})
