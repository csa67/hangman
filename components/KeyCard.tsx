import {View, TouchableOpacity, StyleSheet } from 'react-native';
import {ThemedText } from '@/components/ThemedText'

export function KeyCard({value, width, onPress, isMatch}){

    const getBackgroundColor = () => {
       if(isMatch!=null){
            return isMatch ? 'green' : 'grey';
        }else{
           return 'white';
        }
    }

    return (
        <TouchableOpacity style={[styles.container, {width: width, backgroundColor: getBackgroundColor()}]} onPress= {onPress}>
            <ThemedText style={styles.box}> {value} </ThemedText>
        </TouchableOpacity>
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