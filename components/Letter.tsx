import { StyleSheet, View, TextInput } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

interface LetterProps {
    letter: string;
}

export function Letter({letter} : LetterProps){
    return (
        <View style={styles.container}>
            <ThemedText style={styles.box}> {letter} </ThemedText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 10,
        width: 50,
    },
    box:{
        borderBottomColor: 'black',
        textAlign: 'center',
        color: 'black',
        fontSize: 24,
    }
})