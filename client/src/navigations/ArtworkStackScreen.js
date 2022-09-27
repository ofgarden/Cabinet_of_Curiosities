/* eslint-disable react/no-unstable-nested-components */
import React, { useState, useEffect } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, AntDesign } from '@expo/vector-icons';

import { ArtworkContext } from '../contexts/ArtworkContext';
import { getArtworks } from '../services/artworkService';

import ArtworkScreen from '../screens/ArtworkScreen';
import ArtworkInfo from '../components/ArtworkInfo';
import AddArtwork from '../components/AddArtwork';

const Stack = createStackNavigator();

export default function ArtworkStackScreen() {
  const [artworks, setArtworks] = useState([]);
  const [selected, setSelected] = useState(null);
  const [numberOfArtworks, setNumberOfArtworks] = useState('');
  const navigation = useNavigation();

  async function updateArtworks() {
    const data = await getArtworks();
    setArtworks(data);
  }

  useEffect(() => {
    updateArtworks();
  }, []);

  // const deleteSubmit = async () => {};

  return (
    <ArtworkContext.Provider value={{ selected, setSelected }}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#152238',
          },
          headerBackImage: () => (
            <Ionicons
              name="ios-chevron-back"
              size={25}
              color="white"
              style={{ paddingLeft: 10 }}
            />
          ),
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
            headerTitle: `Cabinet  ${numberOfArtworks}`,
            headerRight: () => (
              <Ionicons
                onPress={() => navigation.navigate('AddArtwork')}
                name="add-circle-outline"
                size={25}
                color="white"
                style={{ paddingRight: 10 }}
              />
            ),
          }}
        >
          {(props) => (
            <ArtworkScreen
              artworks={artworks}
              numberOfArtworks={numberOfArtworks}
              setNumberOfArtworks={setNumberOfArtworks}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="ArtworkInfo"
          options={{
            headerTitle: '',
            headerBackTitleVisible: false,
            headerRight: () => (
              <AntDesign
                name="delete"
                size={20}
                color="white"
                style={{ paddingRight: 10 }}
                onPress={() => {}}
              />
            ),
          }}
        >
          {(props) => <ArtworkInfo artworks={artworks} selected={selected} />}
        </Stack.Screen>
        <Stack.Screen
          name="AddArtwork"
          options={{
            headerTitle: '',
            headerBackTitleVisible: false,
          }}
        >
          {(props) => <AddArtwork setArtworks={setArtworks} />}
        </Stack.Screen>
      </Stack.Navigator>
    </ArtworkContext.Provider>
  );
}
