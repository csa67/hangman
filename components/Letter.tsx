import { StyleSheet, View, TextInput } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

export function Letter({letter}){
    return (
        <View style={styles.container} className="LetterBox">
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
        fontSize: 24,
    }
})