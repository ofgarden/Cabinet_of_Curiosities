import 'react-native-gesture-handler';
import React, { useState } from 'react';

import Navigation from './src/navigations/Navigation';
import LoginScreen from './src/screens/LoginScreen';

import { UserContext } from './src/contexts/UserContext';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {isLoggedIn ? <Navigation /> : <LoginScreen />}
    </UserContext.Provider>
  );
}
