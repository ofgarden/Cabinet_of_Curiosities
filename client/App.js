import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native';
import { UserContext } from './src/contexts/UserContext';
import Navigation from './src/navigations/Navigation';
import LoginScreen from './src/screens/LoginScreen';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  }, []);

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {isLoaded ? (
        isLoggedIn ? (
          <Navigation />
        ) : (
          <LoginScreen />
        )
      ) : (
        <SafeAreaView style={styles.container}>
          <Image
            style={styles.item}
            resizeMode="cover"
            source={require('./src/assets/images/giphy.gif')}
          />
        </SafeAreaView>
      )}
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
