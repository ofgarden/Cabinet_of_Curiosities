import React, { useState, useEffect, useContext } from 'react';
import {
  Dimensions,
  StyleSheet,
  FlatList,
  Pressable,
  Image,
  View,
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ArtworkContext } from '../contexts/ArtworkContext';

const screenWidth = Dimensions.get('window').width - 50;
const screenHeight = Dimensions.get('window').height;
const numColumns = 3;
const imageSize = screenWidth / numColumns - 10;

const ArtworkScreen = ({ artworks, numberOfArtworks, setNumberOfArtworks }) => {
  const { setSelected } = useContext(ArtworkContext);
  const navigation = useNavigation();

  useEffect(() => {
    const number = artworks.length;
    setNumberOfArtworks(number);
  }, [artworks.length, setNumberOfArtworks]);

  return (
    <View style={styles.container}>
      <FlatList
        data={artworks}
        numColumns={3}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <Pressable
            key={item.id}
            onPress={() => {
              setSelected(item.id);
              navigation.navigate('ArtworkInfo');
            }}
          >
            <View style={styles.item}>
              <Image
                style={styles.item}
                resizeMode="cover"
                source={{ uri: item.image }}
              />
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: screenHeight,
    // backgroundColor: 'white',
    paddingLeft: 20,
    paddingTop: 20,
  },
  item: {
    height: imageSize,
    width: imageSize,
    marginRight: 20,
    marginBottom: 20,
    borderRadius: 15,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 3, height: 1 },
    shadowRadius: 2.5,
  },
});

export default ArtworkScreen;
