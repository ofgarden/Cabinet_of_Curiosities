import 'react-native-gesture-handler';
import React, { useState } from 'react';
// import { StyleSheet } from 'react-native';
import Navigation from './src/components/Navigation';
import LoginScreen from './src/screens/LoginScreen';
// import { NavigationContainer } from '@react-navigation/native';
import { UserContext } from './src/UserContext';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [text, setText] = useState('hello from ADVANCED context');
  // <NavigationContainer>
  //   <Stack.Navigator screenOptions={{ headerShown: false }}>
  //     <Stack.Screen name="Login" component={LoginScreen} />
  //     <Stack.Screen name="Navigation" component={Navigation} />
  //   </Stack.Navigator>
  // </NavigationContainer>;

  /*
  user.isLoggedIn ? Navigation : LoginSceen

*/
  return (
    <UserContext.Provider value={{ text, setText }}>
      {isLoggedIn ? (
        <Navigation />
      ) : (
        <LoginScreen setIsLoggedIn={setIsLoggedIn} />
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
