import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';

interface LetterProps {
    letter: string;
}

export const Letter = ({ letter }: LetterProps) => {
    const textColor = useThemeColor({ light: '#000', dark: '#fff' }, 'text');  

    return (
        <Text style={[styles.letter, { color: textColor }]}>{letter}</Text>
    );
};

const styles = StyleSheet.create({
    letter: {
        fontSize: 24,  
        fontWeight: 'bold',
        marginHorizontal: 4, 
    },
});
