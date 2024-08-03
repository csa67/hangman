import { View, Text, StyleSheet } from 'react-native';
import {ThemedText} from '@/components/ThemedText';
import { ThemedView } from './ThemedView';

interface GameMessageProps{
  message: string;
}
export function GameMessage({ message }: GameMessageProps){
  return (
    <ThemedView style={styles.messageContainer}>
      <ThemedText style={styles.messageText}>{message}</ThemedText>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  messageText: {
    color: 'red',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
