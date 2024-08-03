# 🎮 Hangman Game Application

## Table of Contents
- [📖 Introduction](#introduction)
- [✨ Features](#features)
- [🛠️ Technologies Used](#technologies-used)
- [🚀 Installation](#installation)
- [📱 Usage](#usage)

## 📖 Introduction
Hangman is a classic word-guessing game implemented as a mobile application using Node.js and React Native with Expo. The app provides an interactive and engaging user experience across iOS and Android platforms.

## ✨ Features
- 🔠 Dynamic word selection fetched from an external API.
- 🖱️ User-friendly on-screen keyboard with disabled keys after one click to prevent repeated guesses.
- 🎨 Dynamic feedback and theming for guessed letters.
- 🎉 Win and 💔 lose overlay dialogs with reset game functionality.
- 📡 Real-time data updates using AJAX and JSON.
- 📱 Responsive and interactive UI design.

## 🛠️ Technologies Used
- **Frontend:** React Native, Expo, JavaScript, HTML, CSS
- **Backend:** Node.js
- **Data Handling:** AJAX, JSON

## 🚀 Installation
To set up the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/csa67/hangman.git
   cd hangman
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the app:**
   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a development build, Android emulator, iOS simulator, or Expo Go.

## 📱 Usage
- Open the app in your chosen environment.
- Start a new game and use the on-screen keyboard to guess letters.
- The app will fetch a random word from an external API.
- Correct guesses will reveal the letters in the word.
- Incorrect guesses will increase the wrong guess count.
- If all letters are guessed correctly, a win dialog will appear.
- If the maximum number of wrong guesses is reached, a lose dialog will appear with the correct word.
- You can reset the game using the dialog options.
