import React, {useState} from 'react'
import { Text, View, StyleSheet } from "react-native";
import { Letter } from '@/components/Letter';
import { Keyboard } from '@/components/Keyboard';

export default function Index() {
   const initialWord = Array.from({ length: 6 }, () => String.fromCharCode(65 + Math.floor(Math.random() * 26)));
   console.log(initialWord);
   const [word, setWord] = useState(initialWord);
   const[ revealedLetters, setRevealedLetters ] = useState(Array(6).fill(null));

   const handleKeyPress = (key) => {
        const newRevealedLetters = [...revealedLetters];
        let letterRevealed = false;
        word.forEach((letter, index) => {
            if(letter === key && !newRevealedLetters[index]){
                newRevealedLetters[index] = key;
                letterRevealed = true;
            }
        });

        if(letterRevealed){
            setRevealedLetters(newRevealedLetters);
        }

   }

  return (
    <View style={styles.container}>
        <View style={styles.wordContainer}>
            {revealedLetters.map((letter, index) => (
                <Letter key={index} letter={letter}/>
            ))}
        </View>
        <View style={styles.flexSpacer}/>
        <Keyboard revealedLetters = {revealedLetters} onKeyPress = {handleKeyPress}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
    },
    wordContainer:{
        flexDirection: 'row',
        marginTop: 20,
    },flexSpacer: {
        flex:1,
    }
})
