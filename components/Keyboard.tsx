import {View, StyleSheet, Dimensions} from 'react-native';
import { KeyCard } from '@/components/KeyCard'

export function Keyboard({onKeyPress, pressedKeys}){

    const {width: screenWidth} = Dimensions.get('window');
    const keyWidth = (screenWidth - 20)/10 - 6;

    console.log(onKeyPress);
    const rows = [
        ['Q','W','E','R','T','Y','U','I','O','P'],
        ['A','S','D','F','G','H','J','K','L'],
        ['Z','X','C','V','B','N','M']
    ];

    return (
        <View style = {styles.keyboard}>
            {rows.map((row, rowNum) => (
                <View key={rowNum} style={styles.row}>
                {row.map((letter, index) => (
                    <KeyCard key={index} value={letter} width={keyWidth} onPress={() => onKeyPress(letter)}
                    isMatch={pressedKeys[letter]}/>
                ))}
                </View>
            ))}
        </View>
   );
}

const styles = StyleSheet.create({
    keyboard:{
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
    }
});