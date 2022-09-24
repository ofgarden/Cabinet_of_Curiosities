/* eslint-disable react/no-unstable-nested-components */

import React, { useState, useEffect } from 'react';
import { Button } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import ArtworkScreen from '../screens/ArtworkScreen';
import AddArtwork from '../components/AddArtwork';
import ArtworkInfo from '../components/ArtworkInfo';

import { getArtwork } from '../services/artworkService';

const Stack = createStackNavigator();

export default function ArtworkStackScreen() {
  const [artworks, setArtworks] = useState([]);
  const navigation = useNavigation();

  // 자동 업데이트 되는 함수 추가! (previous exercise 참고)
  useEffect(() => {
    getArtwork().then((artworkslist) => setArtworks(artworkslist));
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen
        artworks={artworks}
        name="Artwork"
        options={{
          headerTitle: 'Cabinet',
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('AddArtwork')}
              title="ICON"
              color="black"
            />
          ),
        }}
      >
        {(props) => <ArtworkScreen artworks={artworks} />}
      </Stack.Screen>
      <Stack.Screen name="AddArtwork" component={AddArtwork} />
      <Stack.Screen name="ArtworkInfo">
        {(props) => <ArtworkInfo artworks={artworks} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
