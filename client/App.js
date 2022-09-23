import 'react-native-gesture-handler';
import React, { useState } from 'react';
// import { StyleSheet } from 'react-native';
import Navigation from './src/components/Navigation';
import LoginScreen from './src/screens/LoginScreen';
// import { NavigationContainer } from '@react-navigation/native';
import { UserContext } from './src/UserContext';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {isLoggedIn ? (
        <Navigation />
      ) : (
        <LoginScreen />
        // <LoginScreen setIsLoggedIn={setIsLoggedIn} />
      )}
    </UserContext.Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
