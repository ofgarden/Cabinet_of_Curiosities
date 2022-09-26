/* eslint-disable react/no-unstable-nested-components */

import React, { useState, useEffect } from 'react';
import { Button } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import { ArtworkContext } from '../contexts/ArtworkContext';
import { getArtworks } from '../services/artworkService';

import ArtworkScreen from '../screens/ArtworkScreen';
import ArtworkInfo from '../components/ArtworkInfo';
import AddArtwork from '../components/AddArtwork';

const Stack = createStackNavigator();

export default function ArtworkStackScreen() {
  const [artworks, setArtworks] = useState([]);
  const [selected, setSelected] = useState(null);
  const navigation = useNavigation();

  async function updateArtworks() {
    const data = await getArtworks();
    setArtworks(data);
  }
  // TODO: 자동 업데이트 되는 함수 추가! (previous exercise 참고) 안됨
  // 새로고침 해야지만 나옴...
  useEffect(() => {
    // getArtworks().then((artworkslist) => setArtworks(artworkslist));
    updateArtworks();
  }, []);

  return (
    <ArtworkContext.Provider value={{ selected, setSelected }}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#152238',
          },
          headerTitleAlign: 'left',
          headerTintColor: '#FFFFF3',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: '25',
          },
        }}
      >
        <Stack.Screen
          artworks={artworks}
          name="Artwork"
          options={{
            headerTitle: 'Cabinet',
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate('AddArtwork')}
                title="+"
                color="white"
              />
            ),
          }}
        >
          {(props) => <ArtworkScreen artworks={artworks} />}
        </Stack.Screen>
        <Stack.Screen name="ArtworkInfo">
          {(props) => <ArtworkInfo artworks={artworks} selected={selected} />}
        </Stack.Screen>
        <Stack.Screen
          name="AddArtwork"
          // setArtworks={setArtworks}
          // component={AddArtwork}
          options={{
            headerBackTitle: false,
            headerTitle: false,
            // headerShown: false,
            // headerBackImageSource:
          }}
        >
          {(props) => <AddArtwork setArtworks={setArtworks} />}
        </Stack.Screen>
      </Stack.Navigator>
    </ArtworkContext.Provider>
  );
}
