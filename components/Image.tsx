import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';

// Import the JSON file
const images = require('../assets/hangman_images.json'); // Adjust the path as needed

const HangmanApngReload = ({ imageKey }) => {
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

  // Define the image dimensions based on screen size (e.g., 50% of screen width and height)
  const imageWidth = screenWidth * 0.5;
  const imageHeight = screenHeight * 0.5;

  // State to force re-render
  const [reloadKey, setReloadKey] = useState(0);

  const handleReload = () => {
    setReloadKey(prevKey => prevKey + 1);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleReload}>
        <FastImage
          key={reloadKey} // Change key to force reload
          source={{ uri: `data:image/png;base64,${images[imageKey]}` }}
          style={[
            styles.image,
            {
              width: imageWidth,
              height: imageHeight,
            },
          ]}
          resizeMode={FastImage.resizeMode.contain}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    // width and height will be dynamically set
  },
});

export default HangmanApngReload;
