import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';

const ArtworkInfo = ({ artworks, selected }) => {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        {artworks
          .filter((artwork) => {
            return artwork.id === selected;
          })
          .map((artwork, i) => {
            return (
              <Image
                key={artwork.id}
                source={{ uri: artwork.image }}
                style={styles.image}
              />
            );
          })}
      </View>
      <Text style={styles.textContainer}>
        {artworks
          .filter((artwork) => {
            return artwork.id === selected;
          })
          .map((artwork, i) => {
            return (
              <>
                {/* TODO: 어떻게 하면 분리 시키지/.?^^ */}
                <Text style={styles.title_container}>
                  <Text key={artwork.id} style={styles.title}>
                    {artwork.title}
                    {'\n'}
                    {'\n'}
                  </Text>
                </Text>
                <Text key={artwork.id + i}>
                  {artwork.artist}
                  {'\n'}
                </Text>
                <Text style={styles.description}>
                  {artwork.medium}
                  {'\n'}
                  {artwork.year}
                </Text>
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
    padding: 38,
  },
  image_container: {
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 3, height: 1 },
    shadowRadius: 2.5,
  },
  image: {
    width: 300,
    height: 300,
  },
  textContainer: {
    flex: 1,
    // width: 320,
    width: Dimensions.get('window').width,
    paddingHorizontal: 20,
    marginTop: 38,
  },
  // title_container: {
  //   felx: 1,
  //   alignSelf: 'center',
  // },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 25,
    // textAlign: centert',
  },
  description: {
    fontFamily: 'Poppins-Regular',
    textAlign: 'right',
  },
});

export default ArtworkInfo;
