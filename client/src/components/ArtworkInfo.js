import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ArtworkInfo = ({ artworks, selected }) => {
  return (
    <View style={styles.container}>
      <View>
        {artworks
          .filter((artwork) => {
            return artwork.id === selected;
          })
          .map((artwork, i) => {
            return (
              <Image source={{ uri: artwork.image }} style={styles.imageBox} />
            );
          })}
      </View>
      <Text style={styles.titleContainer}>
        {artworks
          .filter((artwork) => {
            return artwork.id === selected;
          })
          .map((artwork, i) => {
            return (
              <>
                {/* TODO: 어떻게 하면 분리 시키지/.?^^ */}
                <Text style={styles.titleText}>{artwork.title}</Text>;
                <Text>{artwork.artist}</Text>
                <Text>{artwork.medium}</Text>
              </>
            );
          })}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  titleContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'red',
  },
  titleText: {
    borderWidth: 1,
    borderColor: 'red',
    fontSize: 25,
    paddingVertical: 20,
  },
  imageBox: {
    width: 150,
    height: 150,
    borderColor: 'red',
    borderWidth: 1,
  },
});

export default ArtworkInfo;
