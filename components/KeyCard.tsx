import React, {useState, useEffect} from 'react';
import {View, Pressable, StyleSheet } from 'react-native';
import {ThemedText } from '@/components/ThemedText'

interface KeyCardProps{
    value: string,
    width: number,
    onPress: () => void,
    isMatch: boolean | null
}
export function KeyCard({value, width, onPress, isMatch}: KeyCardProps){

    const [isDisabled, setIsDisabled] = useState<boolean>(false);

    useEffect(() => {
        setIsDisabled(false)
    },[isMatch]);

    const handlePress = () => {
        if (!isDisabled) {
            onPress();
            setIsDisabled(true);
        }
    };

    const getBackgroundColor = () => {
       if(isMatch!=null){
            return isMatch ? 'green' : 'grey';
        }else{
           return 'white';
        }
    }

    return (
        <Pressable
         style={({pressed}) =>
         [styles.container,
            {width: width,
            backgroundColor: getBackgroundColor(),
            opacity: pressed ? 0.5 : 1,
            },
         ]} onPress= {handlePress}
          disabled={isDisabled}>
            <ThemedText style={styles.box}> {value} </ThemedText>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 2,
        paddingVertical:5,
        borderRadius: 5,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: "#000"
    },
    box: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})