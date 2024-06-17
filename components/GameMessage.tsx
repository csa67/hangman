import { View, Text, StyleSheet } from 'react-native';
import {ThemedText} from '@/components/ThemedText';

export function GameMessage({ message }){
  return (
    <View style={styles.messageContainer}>
      <ThemedText style={styles.messageText}>{message}</ThemedText>
    </View>
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
