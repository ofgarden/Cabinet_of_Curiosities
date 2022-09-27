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
  const [modalVisible, setModalVisible] = useState(false);
  const [numberOfArtworks, setNumberOfArtworks] = useState('');
  const navigation = useNavigation();

  async function updateArtworks() {
    const data = await getArtworks();
    setArtworks(data);
  }

  useEffect(() => {
    updateArtworks();
  }, []);

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
              color="#FFFFF3"
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
            headerTitle:
              numberOfArtworks > 0
                ? `Cabinet  ${numberOfArtworks}`
                : 'Cabinet ',
            headerRight: () => (
              <Ionicons
                onPress={() => navigation.navigate('AddArtwork')}
                name="add-circle-outline"
                size={25}
                color="#FFFFF3"
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
                color="#FFFFF3"
                style={{ paddingRight: 10 }}
                onPress={() => setModalVisible(true)}
              />
            ),
          }}
        >
          {(props) => (
            <ArtworkInfo
              artworks={artworks}
              setArtworks={setArtworks}
              selected={selected}
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            />
          )}
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
