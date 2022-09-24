import 'react-native-gesture-handler';
import React, { useState, useContext } from 'react';

// SCREEN
import Navigation from './src/components/Navigation';
import LoginScreen from './src/screens/LoginScreen';

// Context
import { UserContext } from './src/UserContext';
import { ArtworkContext } from './src/ArtworkContext';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // TODO: ArtworkContext 구현하기!
  // const { artworks, setArtworks } = useContext(ArtworkContext);
  // setArtworks useState를 쓴 곳이 없다..? 나 바보??? db 서비스 부르는 곳에 추가해보자!! -> 찾음 ㅡㅡ.. 왜 안될까..

  return (
    // <ArtworkContext.Provider value={{ artworks, setArtworks }}>
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {isLoggedIn ? <Navigation /> : <LoginScreen />}
    </UserContext.Provider>
    // </ArtworkContext.Provider>
  );
}
