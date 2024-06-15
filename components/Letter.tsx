import React, {useState} from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import { ThemedText } from '@/components/ThemedText'


export function Letter({letter}){

    return (
        <View style={styles.container} className="LetterBox">
            <ThemedText style={styles.box}> {letter} </ThemedText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    },
    box:{
        padding: 4,
        borderBottomColor: 'black',
        borderBottomWidth: 4,
        textAlign: 'center',
        fontSize: 24
    }
})