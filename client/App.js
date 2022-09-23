import 'react-native-gesture-handler';
import { useState } from 'react';
// import { StyleSheet } from 'react-native';
import Navigation from './src/components/Navigation';
import LoginScreen from './src/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // <NavigationContainer>
  //   <Stack.Navigator screenOptions={{ headerShown: false }}>
  //     <Stack.Screen name="Login" component={LoginScreen} />
  //     <Stack.Screen name="Navigation" component={Navigation} />
  //   </Stack.Navigator>
  // </NavigationContainer>;

  /*
  user.isLoggedIn ? Navigation : LoginSceen

*/
  return isLoggedIn ? (
    <Navigation />
  ) : (
    <LoginScreen setIsLoggedIn={setIsLoggedIn} />
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
