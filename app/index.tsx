import React, {useState} from 'react'
import { Text, View, StyleSheet } from "react-native";
import { Letter } from '@/components/Letter';
import { Keyboard } from '@/components/Keyboard';
import { GameMessage } from '@/components/GameMessage'
import { WordDisplay } from '@/components/WordDisplay';
import {OverlayDialog } from '@/components/OverlayDialog';

export default function Index() {

    // Generate a random word with 6 letters
    const generateWord = () => {
        const word = [];
        for (let i = 0; i < 6; i++) {
            const answer = Math.floor(Math.random() * 26);
            const letter = String.fromCharCode(65 + answer);
            word.push(letter);
        }
        return word;
        console.log(word);
    };

   const [word, setWord] = useState(generateWord());
   const [ pressedKeys, setPressedKeys ] = useState({});
   const [ revealedLetters, setRevealedLetters ] = useState([]);
   const [totalWrongGuesses, setTotalWrongGuesses] = useState(0);

   const handleKeyPress = (key) => {

       const isMatch = word.includes(key);
       setPressedKeys((prev) => ({ ...prev, [key]: isMatch}));
       if(isMatch){
            setRevealedLetters((prev) => [...prev, key]);
       }else{
            setTotalWrongGuesses((prevCount) => prevCount + 1);
       }
   };

   const resetGame = () => {
           setWord(generateWord());
           setPressedKeys({});
           setRevealedLetters([]);
           setTotalWrongGuesses(0);
   };

  return (
    <View style={totalWrongGuesses === 8 ? [styles.container, styles.blurContainer] : styles.container}>
        <WordDisplay word={word} revealedLetters = {revealedLetters}/>
        <View style={styles.flexSpacer}/>
        <Keyboard pressedKeys = {pressedKeys} onKeyPress = {handleKeyPress}/>
        <OverlayDialog visible={totalWrongGuesses === 8} onClose={resetGame}/>
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
    },flexSpacer: {
        flex:1,
    }, blurContainer: {
        backgroundColor: '#ede0df', // Semi-transparent white background for blur effect
    }
});
