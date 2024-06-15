import React, {useState} from 'react'
import { Text, View, StyleSheet } from "react-native";
import { Letter } from '@/components/Letter';
import { Keyboard } from '@/components/Keyboard';

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

  return (
    <View style={[styles.container, totalWrongGuesses > 8 && styles.blurContainer]}>
        <View style={styles.wordContainer }>
            {word.map((letter, index) => (
                <Letter key={index} letter={revealedLetters.includes(letter) ? letter : ''}/>
            ))}
        </View>
        <View style={styles.flexSpacer}/>
        <Keyboard pressedKeys = {pressedKeys} onKeyPress = {handleKeyPress}/>

        {totalWrongGuesses > 8 && (
            <View style={styles.messageContainer}>
                <Text style={styles.messageText}>You Lose!</Text>
            </View>
        )}
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
    }, blurContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent white background for blur effect
    },
    messageContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
   },
        messageText: {
            color: 'red',
            fontSize: 24,
            fontWeight: 'bold',
        },
});
