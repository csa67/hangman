import React, {useState, useEffect } from 'react'
import { Text, View, StyleSheet } from "react-native";
import { Letter } from '@/components/Letter';
import { Keyboard } from '@/components/Keyboard';
import { GameMessage } from '@/components/GameMessage'
import { WordDisplay } from '@/components/WordDisplay';
import {OverlayDialog } from '@/components/OverlayDialog';

export default function Index() {

     //Get a random word from server.
     const [word, setWord] = useState('');
     const [loading, setLoading] = useState(true);
     const [ pressedKeys, setPressedKeys ] = useState({});
     const [ revealedLetters, setRevealedLetters ] = useState([]);
     const [totalWrongGuesses, setTotalWrongGuesses] = useState(0);

     useEffect(() => {
        generateWord();
     },[]);

    async function generateWord() {
        const url = "https://random-word-api.herokuapp.com/word";

        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data[0]);
            setWord(data[0].toUpperCase());
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    }

   const handleKeyPress = (key) => {
       const isMatch = word.includes(key);
       console.log(`Is match: ${isMatch}`);
       setPressedKeys((prev) => ({ ...prev, [key]: isMatch}));
       if(isMatch){
            setRevealedLetters((prev) => [...prev, key]);
       }else{
            setTotalWrongGuesses((prevCount) => prevCount + 1);
       }
   };


    const checkWin = () => {
        return word !== '' && word.split('').every((letter) => revealedLetters.includes(letter));
    };


   const resetGame = () => {
           setLoading(true);
           setPressedKeys({});
           setRevealedLetters([]);
           setTotalWrongGuesses(0);
           generateWord();
   };

  return (
    <View style={totalWrongGuesses === 8 ? [styles.container, styles.blurContainer] : styles.container}>
            <WordDisplay word={word} revealedLetters = {revealedLetters}/>
            <OverlayDialog visible={checkWin()} onClose = {resetGame} result = "Yay! You win!!"/>
            <View style={styles.flexSpacer}/>
            <Keyboard pressedKeys = {pressedKeys} onKeyPress = {handleKeyPress}/>
            <OverlayDialog visible={totalWrongGuesses === 8} onClose={resetGame} result = {`It's ${word}!You Lose!!`}/>
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
