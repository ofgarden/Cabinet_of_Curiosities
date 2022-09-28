import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import { UserContext } from './src/contexts/UserContext';
import Navigation from './src/navigations/Navigation';
import LoginScreen from './src/screens/LoginScreen';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./src/assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./src/assets/fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('./src/assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Medium': require('./src/assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBoldItalic': require('./src/assets/fonts/Poppins-SemiBoldItalic.ttf'),
    'Poppins-MediumItalic': require('./src/assets/fonts/Poppins-MediumItalic.ttf'),
    'FrederickatheGreat-Regular': require('./src/assets/fonts/FrederickatheGreat-Regular.ttf'),
  });

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {isLoaded ? (
        isLoggedIn ? (
          <Navigation />
        ) : (
          <LoginScreen />
        )
      ) : (
        <ImageBackground
          resizeMode="cover"
          imageStyle={{ opacity: 0.6 }}
          style={styles.imageContainer}
          source={require('./src/assets/images/Cabinet_of_Curiosities_1690s_Domenico_Remps.jpeg')}
        >
          <Text style={styles.text}>Cabinet of Curiosities</Text>
        </ImageBackground>
      )}
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {},
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  text: {
    margin: 50,
    fontFamily: 'FrederickatheGreat-Regular',
    fontSize: 50,
    textShadowColor: 'grey',
    textShadowOpacity: 0.2,
    textShadowOffset: { width: 2, height: 3 },
    textShadowRadius: 2,
  },
});
