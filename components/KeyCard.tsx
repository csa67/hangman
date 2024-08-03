import React, { useState, useEffect } from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';

interface KeyCardProps {
    value: string;
    width: number;
    onPress: () => void;
    isMatch: boolean | null;
}

export function KeyCard({ value, width, onPress, isMatch }: KeyCardProps) {
    const [isDisabled, setIsDisabled] = useState<boolean>(false);

    useEffect(() => {
        setIsDisabled(false);
    }, [isMatch]);

    const backgroundColor = useThemeColor({
        light: isMatch == null ? 'white' : isMatch ? '#e1f5fe' : '#ffcdd2',
        dark: isMatch == null ? '#121212' : isMatch ? '#13cf45' : '#b71c1c'
    }, 'background');

    const borderColor = useThemeColor({ light: '#000', dark: '#f5f3f0' }, 'text');

    const handlePress = () => {
        if (!isDisabled) {
            onPress();
            setIsDisabled(true);
        }
    };


    return (
        <Pressable
            style={({ pressed }) => [
                styles.container,
                {
                    width: width,
                    backgroundColor: backgroundColor,
                    borderColor: borderColor,
                    opacity: pressed ? 0.5 : 1,
                },
            ]}
            onPress={handlePress}
            disabled={isDisabled}
        >
            <ThemedText style={styles.box}>{value}</ThemedText>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 2,
        paddingVertical: 5,
        borderRadius: 5,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});
