import {View, StyleSheet, Dimensions} from 'react-native';
import { KeyCard } from '@/components/KeyCard'

export function Keyboard({onKeyPress}){

    const {width: screenWidth} = Dimensions.get('window');
    const keyWidth = (screenWidth - 10)/10 - 6;

    const firstRow = ['Q','W','E','R','T','Y','U','I','O','P'];
    const secondRow = ['A','S','D','F','G','H','J','K','L'];
    const thirdRow = ['Z','X','C','V','B','N','M'];

    return (
        <View style = {styles.keyboard}>
        <View style={styles.row}>
            {firstRow.map((letter, index) => (
                <KeyCard key={index} value={letter} width={keyWidth}/>
            ))}
        </View>
        <View style={styles.row}>
             {secondRow.map((letter, index) => (
                  <KeyCard key={index} value={letter} width={keyWidth}/>
             ))}
        </View>
        <View style={styles.row}>
              {thirdRow.map((letter, index) => (
                   <KeyCard key={index} value={letter} width={keyWidth} onPress={() => onKeyPress(letter)}/>
              ))}
        </View>
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